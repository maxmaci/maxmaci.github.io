let auth0Client = null;

const fetchAuthConfig = () => fetch("https://gist.githubusercontent.com/maxmaci/7d3730462b5a75c634c42c892e1730b0/raw/edac76e0a0175dc135402c87d32b72a7466d7b7c/auth_config.json");

const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0Client = await auth0.createAuth0Client({
    domain: config.domain,
    clientId: config.clientId
  });
};

window.onload = async () => {
  await configureClient();

  updateUI();

  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
    // show the gated content
    return;
  }

  // NEW - check for the code and state parameters
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {

    // Process the login state
    await auth0Client.handleRedirectCallback();
    
    updateUI();

    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, "/");
  }
};

const updateUI = async () => {
  const isAuthenticated = await auth0Client.isAuthenticated();

  document.getElementById("btn-logout").disabled = !isAuthenticated;
  document.getElementById("btn-login").disabled = isAuthenticated;
};

const login = async () => {
  await auth0Client.loginWithRedirect({
    authorizationParams: {
      redirect_uri: 'https://maxmaci.github.io/browser-sample/public/index.html'
    }
  });
};

const logout = () => {
  auth0Client.logout({
    logoutParams: {
      returnTo: 'https://maxmaci.github.io/browser-sample/public/index.html'
    }
  });
};
