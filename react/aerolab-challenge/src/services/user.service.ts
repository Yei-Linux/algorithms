import { env } from '../config/env';
import { User } from '../types/user.type';

export const getUserInfoService = async () => {
  try {
    const promise = await fetch(env.AEROLAB_BASEURL + '/user/me');
    const json = await promise.json();
    return json as User;
  } catch (error) {}
};
