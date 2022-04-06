

async function addNote(e) {
    if (e.key === "Enter") {
        let note = document.createElement('p');
        note.textContent = document.getElementById("take-note").value;
        document.getElementById("root").append(note);
    }
}

export { addNote }