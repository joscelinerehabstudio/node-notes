// JSON is a text based data so it exists as a string. e.g
// let personString = '{"name": "Josceline", "age": 30}';

// To access the data it needs to converted to a native JS object like this:
// let person = JSON.parse(personString);

// To transmit data across a network we must convert it back to a string like this:
// let newPersonString = JSON.stringify(person);

// require access to the file system using node.
const fs = require('fs');

let originalNote = {
    title: 'A Title',
    body: 'Some body text',
}
let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof note);

console.log(note.title);
