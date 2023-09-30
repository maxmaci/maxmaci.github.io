function showMessage(message) {
    const notification = document.getElementById("notification");
    const messageElement = document.getElementById("message");

    // Set the message text
    messageElement.textContent = message;

    // Show the notification
    notification.style.opacity = "0"; // Make sure it's visible
    notification.classList.remove("hidden");
    
    setTimeout(() => {
        notification.style.opacity = "1"; // Gradually increase opacity
    }, 50);
    
    // Fade out after 3 seconds (adjust the duration as needed)
    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.classList.add("hidden");
            notification.style.opacity = "1"; // Reset opacity for future use
        }, 500); // Wait for the fade-out transition to complete
    }, 3000); // 3 seconds
}