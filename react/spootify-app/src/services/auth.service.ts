export const authSpotify = async () => {
  try {
    const formData = new URLSearchParams();
    formData.append('grant_type', 'client_credentials');
    formData.append('client_id', import.meta.env.VITE_SPOTIFY_CLIENTID);
    formData.append('client_secret', import.meta.env.VITE_SPOTIFY_CLIENTSECRET);

    const promise = await fetch('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: formData.toString(),
    });
    const json = (await promise.json()) as {
      access_token: string;
      expires_in: number;
      token_type: string;
    };

    return json;
  } catch (error) {
    throw new Error('Error in authentication');
  }
};
