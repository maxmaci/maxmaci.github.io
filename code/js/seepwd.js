const passwordInputs = document.querySelectorAll(".password-input");
const showPasswordButtons = document.querySelectorAll(".show-password");

showPasswordButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (passwordInputs[index].type === "password") {
            passwordInputs[index].type = "text";
            showPasswordButtons[index].innerHTML = '<img src="https://svgshare.com/i/y4V.svg" alt="Icon">'
        } else {
            passwordInputs[index].type = "password";
            showPasswordButtons[index].innerHTML = '<img src="https://svgshare.com/i/y5_.svg" alt="Icon">'
        }
    });
});