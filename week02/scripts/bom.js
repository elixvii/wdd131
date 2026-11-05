const inputElement = document.querySelector("#favchap"); //declare three variables that hold references to the input, button, and list elements
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// wait for button clicks
buttonElement.addEventListener('click', function () {    // Check if the user entered something
    if (inputElement.value != "") {
        if (listElement.children.length >= 10) { // Limit the list to 10 chapters
            alert("You can only add 10 chapters!");
            inputElement.focus();
            return;
        }
        const li = document.createElement('li'); //create a li element that will hold each entry's chapter title and an associated delete button
        li.textContent = inputElement.value; //Populate the li element variable's textContent or innerHTML with the input value 
        const deleteButton = document.createElement('button'); //Create a delete button.
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function () { //Add an event listener to the delete button that removes the li element when clicked
            listElement.removeChild(li);
            inputElement.focus();
        });
        li.appendChild(deleteButton);
        listElement.appendChild(li); //Append the li element variable to the unordered list in your HTML.
        inputElement.value = ""; //Change the input value to an empty string to clean up the interface for the user
    }
    inputElement.focus(); //After processing, the focus (active cursor) should be sent to the input element
});