const axios = require('axios');
const url = require('url');

const {
  HS_OAUTH_CLIENT_ID,
  HS_OAUTH_CLIENT_SECRET,
  HS_OAUTH_REDIRECT_URI,
} = process.env

async function getAccessToken(code) {
  const params = new url.URLSearchParams({
    grant_type: 'authorization_code',
    client_id: HS_OAUTH_CLIENT_ID,
    client_secret: HS_OAUTH_CLIENT_SECRET,
    redirect_uri: HS_OAUTH_REDIRECT_URI,
    code
  });

  const response = await axios.post('https://api.hubapi.com/oauth/v1/token', params.toString())
  return response.data
}


exports.main = async ({ params, accountId, contact }, sendResponse) => {
  try {
    const redirectURL = `https://app.hubspot.com/settings/${accountId}/website/themes`
    const { code } = params;
    const tokenObject = await getAccessToken(`${code}`)
    const { access_token } = tokenObject


    sendResponse({ headers: { "Location": redirectURL }, statusCode: 301 });
  } catch (error) {
    let errorMessage = `message: ${error.message}`;

    if (error.response) {
      errorMessage += `, status: ${error.response.status}, data: ${JSON.stringify(error.response.data)}`;
    } else if (error.request) {
      errorMessage += `, request: ${error.request}`;
    }

    sendResponse({ body: { error: errorMessage }, statusCode: 500 });
  }
};