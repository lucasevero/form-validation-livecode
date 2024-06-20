// TODO: Validate this form

// RULES
// 01. ALL text inputs should be filled
// 02. EMAIL INPUT must be valid
// 03. The TERMS OF SERVICE checkbox must be checked

// Select the elements
  // ALL text fields
  const allTextInputs = document.querySelectorAll(".form-control")

  // The email field
  const emailInput = document.getElementById("email")

  // TOS checkbox
  const tosCheckbox = document.getElementById("tos")

  // Submit Button
  const submitBtn = document.querySelector("button[type='submit'].btn.btn-primary")

const enableButton = () => {
  // Check if all contidions are ok
  // Change the disabled attribute of the submit button
  const condition = allFilled() && emailIsValid() && tosIsChecked()

  if (condition) {
    submitBtn.disabled = false
  } else {
    submitBtn.disabled = true
  }
}

// PSEUDO CODE
// LISTEN TO
  // CHANGE on the checkbox
  tosCheckbox.addEventListener("change", enableButton);

  // BLUR on the text fields
  allTextInputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
      if (event.currentTarget.value != "") {
        event.currentTarget.classList.add("is-valid")
        event.currentTarget.classList.remove("is-invalid")
      } else {
        event.currentTarget.classList.remove("is-valid")
        event.currentTarget.classList.add("is-invalid")
      }
      enableButton();
    })
  });

const allFilled = () => {
  const inputsArray = Array.from(allTextInputs)
  return inputsArray.every((input) => input.value != "" );
}

const emailIsValid = () => {
  const email = emailInput.value;
  return /^\w+@\w+(\.\w{2,6})+$/.test(email);
}

const tosIsChecked = () => {
  return tosCheckbox.checked;
}
