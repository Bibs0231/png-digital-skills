
/* A4 Feature 2: Practice enquiry validation */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("enquiry-form");
    const message = document.getElementById("message");
    const counter = document.getElementById("message-count");
    const feedback = document.getElementById("message-feedback");

    if (!form || !message || !counter || !feedback) {
        return;
    }

    // Update the character counter while typing
    message.addEventListener("input", function () {

        counter.textContent =
            message.value.length + " / 600 characters";

        // Remove any previous custom error
        message.setCustomValidity("");
        message.removeAttribute("aria-invalid");
        feedback.textContent = "";
    });

    // Check the message before allowing submission
    form.addEventListener("submit", function (event) {

        // Remove leading/trailing spaces and normalise
        // repeated whitespace for meaningful-text checking
        const meaningfulMessage =
            message.value.trim().replace(/\s+/g, " ");

        if (meaningfulMessage.length < 20) {

            event.preventDefault();

            const errorText =
                "Please enter at least 20 meaningful characters.";

            message.setCustomValidity(errorText);
            message.setAttribute("aria-invalid", "true");
            feedback.textContent = errorText;

            message.reportValidity();
            message.focus();

        } else {

            message.setCustomValidity("");
            message.removeAttribute("aria-invalid");
            feedback.textContent = "";

            // Valid form: allow the existing GET submission
        }
    });

});
