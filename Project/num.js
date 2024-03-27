const clientId = '38c5d33af7db41c385f79eded339179c';
const clientSecret = '457493ed8dc84cbb876cde4dc94e92b7';

const getToken = async () => {
  const response = await fetch('https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
      'client_id': clientId,
      'client_secret': clientSecret,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
  return data.access_token;
};

// Call the function to obtain the access token
getToken();
