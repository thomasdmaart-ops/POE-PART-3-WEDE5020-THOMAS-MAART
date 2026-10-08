/**
 * validation.js - Form Validation for contactus.html and enquiry.html
 */

document.addEventListener("DOMContentLoaded", () => {
  // Regex Patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+27|0)\d{9}$|^[0-9\s\-]{10,15}$/;

  /* ==========================================
     1. CONTACT US FORM VALIDATION
     ========================================== */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let isValid = true;

      const fullName = document.getElementById("fullName");
      const contact = document.getElementById("contact");
      const email = document.getElementById("email");
      const locationSelect = document.getElementById("locationSelect");
      const service = document.getElementById("serviceSelect");
      const message = document.getElementById("message");
      const formStatus = document.getElementById("formStatus");

      if (formStatus) formStatus.classList.remove("success");
      resetErrors([fullName, contact, email, locationSelect, service, message]);

      // Name
      if (!fullName || fullName.value.trim().length < 3) {
        showError(fullName, "nameError");
        isValid = false;
      }

      // Phone
      if (!contact || !phoneRegex.test(contact.value.trim())) {
        showError(contact, "phoneError");
        isValid = false;
      }

      // Email
      if (!email || !emailRegex.test(email.value.trim())) {
        showError(email, "emailError");
        isValid = false;
      }

      // Location
      if (!locationSelect || locationSelect.value === "") {
        showError(locationSelect, "locationError");
        isValid = false;
      }

      // Service
      if (!service || service.value === "") {
        showError(service, "serviceError");
        isValid = false;
      }

      // Message
      if (!message || message.value.trim().length < 10) {
        showError(message, "messageError");
        isValid = false;
      }

      if (isValid) {
        if (formStatus) formStatus.classList.add("success");
        contactForm.reset();
      }
    });
  }

  /* ==========================================
     2. ENQUIRY FORM VALIDATION
     ========================================== */
  const enquiryForm = document.getElementById("enquiryForm");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let isValid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const enquiry = document.getElementById("enquiry");
      const date = document.getElementById("date");
      const details = document.getElementById("details");
      const formStatus = document.getElementById("enquiryStatus");

      if (formStatus) formStatus.classList.remove("success");
      resetErrors([name, email, phone, enquiry, date, details]);

      // Full Name
      if (!name || name.value.trim().length < 3) {
        showError(name, "enquiryNameError");
        isValid = false;
      }

      // Email
      if (!email || !emailRegex.test(email.value.trim())) {
        showError(email, "enquiryEmailError");
        isValid = false;
      }

      // Phone
      if (!phone || !phoneRegex.test(phone.value.trim())) {
        showError(phone, "enquiryPhoneError");
        isValid = false;
      }

      // Enquiry Type
      if (!enquiry || enquiry.value === "") {
        showError(enquiry, "enquiryTypeError");
        isValid = false;
      }

      // Required Date
      if (!date || date.value.trim() === "") {
        showError(date, "enquiryDateError");
        isValid = false;
      }

      // Order Details
      if (!details || details.value.trim().length < 10) {
        showError(details, "enquiryDetailsError");
        isValid = false;
      }

      if (isValid) {
        if (formStatus) formStatus.classList.add("success");
        enquiryForm.reset();
      }
    });

    // Reset button functionality
    enquiryForm.addEventListener("reset", () => {
      resetErrors([
        document.getElementById("name"),
        document.getElementById("email"),
        document.getElementById("phone"),
        document.getElementById("enquiry"),
        document.getElementById("date"),
        document.getElementById("details")
      ]);
      const formStatus = document.getElementById("enquiryStatus");
      if (formStatus) formStatus.classList.remove("success");
    });
  }

  /* ==========================================
     HELPER FUNCTIONS
     ========================================== */
  function showError(inputElement, errorSpanId) {
    if (inputElement) {
      inputElement.classList.add("error");
    }
    const errorSpan = document.getElementById(errorSpanId);
    if (errorSpan) {
      errorSpan.classList.add("visible");
    }
  }

  function resetErrors(elements) {
    elements.forEach((element) => {
      if (element) {
        element.classList.remove("error");
      }
    });

    const errorSpans = document.querySelectorAll(".error-message");
    errorSpans.forEach((span) => {
      span.classList.remove("visible");
    });
  }
});