// Form Data
const formData = {
    email: "",
    message: "",
};



// Variables 
const feedbackForm = document.querySelector(".feedback-form");
const email = feedbackForm.elements.email;
const message = feedbackForm.elements.message;



// Input Listener
const onFeedbackFormInput = (event) => { 
    formData.email = email.value.trim();
    formData.message = message.value.trim();

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

feedbackForm.addEventListener('input', onFeedbackFormInput);



// Content Loaded Listener
const onWindowDOMContentLoaded = (event) => {
    if (localStorage.getItem("feedback-form-state") === null) {
        return
    }

    const savedData = localStorage.getItem("feedback-form-state");
    const parsedData = JSON.parse(savedData);

    formData.email = parsedData.email;
    formData.message = parsedData.message;

    email.value = parsedData.email;
    message.value = parsedData.message;

    console.log(formData)
};

document.addEventListener('DOMContentLoaded', onWinwodDOMContentLoaded);



// Submit Listener
const onFeedbackFormSubmit = (event) => {
    event.preventDefault();

    if (message.value.trim() === "" || email.value.trim() === "") {
        return alert("Fill please all fields")
    } else {
        console.log(formData);

        localStorage.removeItem("feedback-form-state");

        formData.email = "";
        formData.message = "";

        feedbackForm.reset();
    }
};

feedbackForm.addEventListener('submit', onFeedbackFormSubmit);