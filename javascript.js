// allow page to load, then run function
document.addEventListener("DOMContentLoaded", function () {
    
    // create variables to store form and alert message after submission
    const form = document.getElementById("form-container");
    const alertMsg = document.getElementById("submission-alert-msg");

    // declare function that will run when user presses submit
    form.addEventListener("submit", function (event) {
        
        // hold on deleting inputs
        event.preventDefault(); 

        // declare variable to store submission message
        const message = 'Message submitted successfully.';

        // Update alert message div with message submission verbiage once submission has gone through
        alertMsg.innerHTML = message;

        // Reset form to clear out inputs and start again
        form.reset();
    });
});