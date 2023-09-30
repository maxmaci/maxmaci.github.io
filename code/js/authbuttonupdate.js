    let updateAuthButton = async () => {
    let authButton = document.getElementById("auth-button");
    authButton.style.display = 'block';
    
    const { data, error } = await supa.auth.getSession()
    const sessionNow = data.session;
    if (sessionNow) {
      // User is signed in
    const user = data.session.user;
    let logoutButton = document.getElementById("sign-out");
      logoutButton.style.display = 'block';
      console.log("User is not null:", user);
    } else {
      // User is not signed in
      console.log("User is null or undefined");
    }
  }
  
  updateAuthButton();
 
  let authButtonChoose = async () => {
    let authButton = document.getElementById("auth-button");
    const { data, error } = await supa.auth.getSession()
    const sessionNow = data.session;
    if (sessionNow) {
      // User is signed in
      const user = data.session.user;
      window.location.href = "https://ilterzopiano.super.site/auth/il-mio-account";
    } else {
      // User is not signed in
      openModal();
      console.log("User is null or undefined");
    }
  }
  
  document.getElementById("auth-button").onclick = function () {
  authButtonChoose();
  };