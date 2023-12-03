import { google } from "googleapis";
import readline from "readline";
import fs from "fs";

//UNUSED AS OF NOW! Potential to engage later for "Uploading"

const SCOPES = ["https://www.googleapis.com/auth/drive"];

const TOKEN_PATH = "token.json";

async function authorize() {
  let auth = null;
  fs.readFile("./webtoken.json", (err, content) => {
    if (err) return console.log("Error reading client secret file: " + err);
    auth = JSON.parse(content);
  });
  const oAuth2Client = new google.auth.OAuth2(
    auth.client_id,
    auth.client_secret,
    auth.redirect_uris[0]
  );

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client);
    oAuth2Client.setCredentials(JSON.parse(token));
    auth = oAuth2Client;
  });
}

function getAccessToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter the code from that page here: ", (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error("Error retrieving access token", err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      auth = authoAuth2Client;
    });
  });
}
