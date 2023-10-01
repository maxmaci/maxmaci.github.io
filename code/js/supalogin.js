// Capture email and password input fields for sign-up
let username_signup = document.getElementById("username-sign-up");
let email_signup = document.getElementById("email-sign-up");
let password_signup = document.getElementById("password-sign-up");

async isUsernameAvailable(username: string): Promise<boolean> {
        const { error, count } = await supa.from('profiles')
            .select('username', { count: 'exact' }).eq('username', username);
        if (error) {
            console.error(error);
        }
        return count === 0;
    }


let doSignUp = async () => {
  if (password_signup.value.length < 6) {
    showMessage('La password deve essere almeno di 6 caratteri!');
  } else if (username_signup.value.length < 3) {
    showMessage('Lo username deve essere almeno di 3 caratteri!');
  } else {
	  
	const isUsernameAvailable = await isUsernameAvailable(username_signup.value);
	console.log(isUsernameAvailable);

    if (!isUsernameAvailable) {
      showMessage('Username già in uso. Scegli un altro.');
      return; // Exit the function if the username is not available
    }
	
	const { user, session, error } = await supa.auth.signUp({
    email: email_signup.value,
    password: password_signup.value,
	options: {
    data: {
      username: username_signup.value,
	  avatar_url: 'https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg',
    },
  },
  })
  .then((response) => {
    console.log(response)
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
  }
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