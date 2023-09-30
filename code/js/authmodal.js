function openModal() {
  let modal = document.getElementById("myModal");
  let modalContent = document.querySelector(".modal-content");
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.opacity = "1";
    modalContent.style.opacity = "1";
    modalContent.style.transform = "translateY(0)";
  }, 10);
}
// JavaScript function to close the modal
function closeModal() {
  let modal = document.getElementById("myModal");
  let modalContent = document.querySelector(".modal-content");
  modal.style.opacity = "0";
  modalContent.style.opacity = "0";
  modalContent.style.transform = "translateY(20px)";
  setTimeout(() => {
    modal.style.display = "none";
  }, 300); // Adjust the time to match your transition duration
}
//document.getElementById("auth-button").addEventListener("click", function() {
//  openModal();
//});
document.getElementById("closeModalButton").addEventListener("click", function() {
  closeModal();
});
window.addEventListener("click", function(event) {
  let modal = document.getElementById("myModal");
  let modalContent = document.querySelector(".modal-content");
  if (event.target === modal || event.target === modalContent) {
    closeModal();
    closePassword();
  }
});

function openPassword() {
  let modalContent = document.querySelector(".modal-content-forgot-password");
  modalContent.style.display = "block";
  setTimeout(() => {
    modalContent.style.opacity = "1";
  }, 10);
}
// JavaScript function to close the modal
function closePassword() {
  let modalContent = document.querySelector(".modal-content-forgot-password");
  modalContent.style.opacity = "0";
  setTimeout(() => {
    modalContent.style.display = "none";
  }, 300); // Adjust the time to match your transition duration
}
document.getElementById("forgot-password-button").addEventListener("click", function() {
  openPassword();
});
document.getElementById("close-forgot-password").addEventListener("click", function() {
  closePassword();
});