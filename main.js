const mainContainer = document.getElementById("container");
const myForm = mainContainer.querySelector("#myForm");
const email = myForm.querySelector("input[type='email']");
const submitBtn = myForm.querySelector(".submit");
const emailLabel = myForm.querySelector(".emailLabel");
const labelError = emailLabel.nextElementSibling;
const successMessage = document.querySelector(".sign_up_message_container");
const emailText = successMessage.querySelector(".emailText");
const cancelBtn = successMessage.querySelector(".cancel");

email.addEventListener("input", () => {
	if (email.value.trim()) {
		email.classList.remove("red");
		labelError.classList.add("hidden");
	}
});
myForm.addEventListener("submit", (evt) => {
	evt.preventDefault();
	let isTrue = true;
	const redText = () => {
		email.classList.add("red");
		labelError.classList.remove("hidden");
		labelError.classList.add("red-text");
	};
	const emailInput = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
	if (email.value.trim() === "") {
		redText();
		isTrue = false;
	} else if (!emailInput.test(email.value.trim())) {
		redText();
		isTrue = false;
	}
	if (isTrue) {
		successMessage.classList.remove("hidden");
		mainContainer.style.display = "none";
		emailText.textContent = email.value.trim();
	} else {
		successMessage.classList.add("hidden");
		mainContainer.style.display = "grid";
	}
});

cancelBtn.addEventListener("click", () => {
	successMessage.classList.add("hidden");
	mainContainer.style.display = "grid";
	email.value = "";
});
