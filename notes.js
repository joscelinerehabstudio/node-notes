// console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
    // check notes-data.json extists
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
        return notes;
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {title, body};

    // check if our new title exists in the array
    let duplicateNotes = notes.filter((note) => note.title === title);

    // if it does not exist push it to the notes array and update notes-data.json
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    console.log('Getting notes');
    notes.map((note) => {
        console.log(`${note.title}: ${note.body}`);
    });
};

let getItem = (title) => {
    console.log(`Getting ${title}`);
    notes.map((note) => {
        if (title === note.title) {
            console.log(`${note.title}: ${note.body}`);
        }
    })
}

let remove = (title) => {
    console.log(`Removing ${title}`);
    let notes = fetchNotes();

    notes = notes.filter((note) => note.title !== title);
    saveNotes(notes);
}

module.exports = {
    addNote,
    getAll,
    getItem,
    remove
};