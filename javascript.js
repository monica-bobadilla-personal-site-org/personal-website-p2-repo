document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const messageDiv = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // You can perform form validation here if needed

        // Get the form data
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");

        // Replace this with your desired message or processing logic
        const message = `Thank you, ${name}! Your email (${email}) has been submitted.`;

        // Display the message
        messageDiv.innerHTML = message;

        // You can also reset the form if needed
        form.reset();
    });
});