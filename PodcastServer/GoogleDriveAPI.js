const API = {
  SCOPES: ["https://www.googleapis.com/auth/drive.metadata.readonly"],
  API_KEY: "AIzaSyCOR3JcBP_HSkKWxhqUuV1dGY39OhI1LSs",
  APP_ID: "driveapi-test-403515",
  CLIENT_ID:
    "442709242685-l94vamp9gr5rpgtahqvnn98h1f27us3r.apps.googleusercontent.com",
  //If I'm remembering correctly, when we get it out of testing we can change this to our
  //client URI. Until then we communicate through a secure testing client
  //before the data can be recieved to the
};

function gisLoaded() {
  tokenClient = google;
}
