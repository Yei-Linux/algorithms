export const getTokenFromStorage = () => {
  const token = localStorage.getItem('SPOTI_TOKEN');
  if (!token) {
    throw new Error('Token is not valid');
  }

  return token;
};
