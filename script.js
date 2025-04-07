let confirmed = false;
const selectedDuck = document.getElementById("selectedDuck");
const duckNickname = document.getElementById("duckNickname");
const realName = document.getElementById("realName");
const nickname = document.getElementById("nickname");
const finalNickname = document.getElementById("finalNickname");
const nicknameFeedback = document.getElementById("nicknameFeedback");
const confirmButton = document.getElementById("confirmSelection");
const generateButton = document.getElementById("generateNickname");

let selectedImageSrc = "";  // Variable to store the source of the selected duck image

// Helper function to remove selected class from all ducks
function removeDuckSelection() {
  const ducks = document.getElementsByClassName("duck-thumb");  // Get all duck image elements
  for (let duck of ducks) {
    duck.classList.remove("selected");  // Remove the selected class (border) from each duck
  }
}

// BONUS Task 2: Handle Duck Selection
// Get all Duck images as an HTML collection using class selector "duck-thumb"
const duckThumbs = document.getElementsByClassName("duck-thumb");

// Loop through each duck thumbnail and add a click event listener
for (let duck of duckThumbs) {
  duck.addEventListener("click", function () {
    removeDuckSelection();  // Call the helper function to remove the selected class from all ducks
    this.classList.add("selected");  // Add the selected class (border) to the clicked duck
    selectedImageSrc = this.src;  // Store the src of the selected duck image in selectedImageSrc

    // Check if the selection has already been confirmed
    if (confirmed) {
      selectedDuck.src = selectedImageSrc;  // Update the preview image with the selected duck
    }
  });
}

// Confirm button behavior
confirmButton.addEventListener("click", () => {
  if (!selectedImageSrc) {  // Check if a duck image has been selected
    duckNickname.textContent = "Please select a duck.";  // Show an error message if no duck is selected
    duckNickname.style.color = "red";  // Change the text color to red
    return;  // Stop the function execution if no duck is selected
  }

  const name = realName.value.trim();  // Get the real name and trim any extra spaces
  const nick = nickname.value.trim();  // Get the nickname and trim any extra spaces

  if (name === "" || nick === "") {  // Check if either the real name or the nickname is empty
    nicknameFeedback.textContent = "Please enter both your name and a nickname.";  // Show a message to prompt the user
    nicknameFeedback.style.color = "red";  // Change the text color to red
    return;  // Stop the function execution if either name or nickname is missing
  }

  // If everything is valid, update the final nickname field with the real name and nickname (joined by an underscore)
  finalNickname.textContent = `${name}_${nick}`;
  selectedDuck.src = selectedImageSrc;  // Set the selected duck image as the preview
  confirmed = true;  // Mark the selection as confirmed
});

// BONUS Task 1: Generate Random Nickname
const funNicknames = [
  "Quackzilla", "WaddleKing", "Sir Flaps-a-lot",  // Array of fun duck names
  "FeatherFury", "Captain Quack", "Ducktor Doom"
];

// When the "Generate Nickname" button is clicked
generateButton.addEventListener("click", () => {
  // Randomly select a nickname from the array
  const randomNick = funNicknames[Math.floor(Math.random() * funNicknames.length)];
  nickname.value = randomNick;  // Set the random nickname in the nickname input field

  // If the selection has been confirmed and the real name is not empty
  if (confirmed && realName.value.trim() !== "") {
    // Update the final nickname with the real name and the randomly selected nickname
    finalNickname.textContent = `${realName.value.trim()}_${randomNick}`;
  }
});