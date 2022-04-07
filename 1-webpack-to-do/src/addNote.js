

async function addNote(e) {
    if (e.key === "Enter") {
        // creating paragraph element with value as note inputted by user
        let note = document.createElement('p');
        note.textContent = document.getElementById("take-note").value;
        document.getElementById("root").append(note);

        // erasing value from input box
        document.getElementById("take-note").value = "";
    }
}

export { addNote }