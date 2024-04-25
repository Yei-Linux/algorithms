import { env } from './env';

const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  let [resource, config] = args;
  let newConfig = config;

  if (newConfig) {
    newConfig.headers = {
      ...newConfig.headers,
      Authorization: 'Bearer ' + env.AEROLAB_AUTHTOKEN,
    };
  } else {
    newConfig = {
      headers: {
        Authorization: 'Bearer ' + env.AEROLAB_AUTHTOKEN,
      },
    };
  }

  const response = await originalFetch(resource, newConfig);
  return response;
};
