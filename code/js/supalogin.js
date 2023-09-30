// Capture email and password input fields for sign-up
let username_signup = document.getElementById("username-sign-up");
let email_signup = document.getElementById("email-sign-up");
let password_signup = document.getElementById("password-sign-up");

let doSignUp = async () => {
  const { user, session, error } = await supa.auth.signUp({
    email: email_signup.value,
    password: password_signup.value
  })
  .then((response) => {
    console.log(response)
    email_signup.value = "";
    password_signup.value = "";
      if (response.error) {
        showMessage('Email e/o password non validi!');
      } else {
        logoutButton.style.display = 'block';
        closeModal();
        setTimeout(() => {
        showMessage("Controlla la casella di posta elettronica per convalidare l'account.");
        }, 310);
      }//alert('Logged in as ' + response.data.user.email)
    })
  .catch((err) => {
      showMessage('Email e/o password errata!')
    });
  //log({ user, session, error });
};

// Capture email and password input fields for sign-in
let email_signin = document.getElementById("email-sign-in");
let password_signin = document.getElementById("password-sign-in");

let doSignIn = async () => {
  let logoutButton = document.getElementById("sign-out");
  await supa.auth.signInWithPassword({
    email: email_signin.value,
    password: password_signin.value
  })
  .then((response) => {
    console.log(response)
    email_signin.value = "";
    password_signin.value = "";
      if (response.error) {
        showMessage('Email e/o password errata!');
      } else {
        logoutButton.style.display = 'block';
        closeModal();
        setTimeout(() => {
        showMessage('Accesso avvenuto con successo!');
        }, 310);
      }//alert('Logged in as ' + response.data.user.email)
    })
  .catch((err) => {
      showMessage('Email e/o password errata!')
    });
};

// Sign-out
let doSignOut = async () => {
  showMessage('Torna a trovarci!');
  let logoutButton = document.getElementById("sign-out");
  const { error } = await supa.auth.signOut()
  logoutButton.style.display = 'none';
  //log({ error });
};

// Capture email and password input fields for sign-in
let email_send_link = document.getElementById("email-forgot-password");

let doSendLink = async () => {
  const { data, error } = await supa.auth.resetPasswordForEmail(email_send_link.value,
{
 redirectTo: 'https://ilterzopiano.super.site/changelog/testing/test-2',
});
  //log({ data, error });
};

document.getElementById("sign-up").onclick = function () {
  doSignUp();
};
document.getElementById("sign-in").onclick = function () {
  doSignIn();
};
document.getElementById("sign-out").onclick = function () {
  doSignOut();
};
document.getElementById("send-link").onclick = function () {
  doSendLink();
};