export const msalConfig = {
  auth: {
    clientId: "0000000000-00000000000-00000000-000000000000",
    authority: "https://login.microsoftonline.com/common/",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

export const loginRequest = {
  scopes: ["User.Read", "OnlineMeetings.ReadWrite"]
};