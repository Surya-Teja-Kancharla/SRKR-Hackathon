require('dotenv').config(); // Load environment variables
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Enable CORS if frontend and backend are on different origins
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Endpoint to handle token exchange
app.post('/token', async (req, res) => {
  const { code } = req.body; // Authorization code sent from the frontend
  const CLIENT_ID = process.env.CLIENT_ID; // Client ID from environment variables
  const CLIENT_SECRET = process.env.CLIENT_SECRET; // Client Secret from environment variables
  const REDIRECT_URI = process.env.REDIRECT_URI; // Should match your OAuth setup

  try {
    // Exchange the authorization code for access and refresh tokens
    const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    const { access_token, refresh_token, id_token } = tokenResponse.data;

    // Optionally, retrieve user info using the access token
    const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userInfo = userInfoResponse.data;

    // Send the tokens and user info back to the frontend
    res.json({ access_token, refresh_token, id_token, userInfo });
  } catch (error) {
    console.error('Error exchanging code for token:', error.response?.data || error.message);
    res.status(500).send('Token exchange failed');
  }
});

const PORT = process.env.PORT || 3000; // Use PORT from env or default to 3000
app.listen(PORT, () => {
  console.log(`OAuth server is running on http://localhost:${PORT}`);
});
