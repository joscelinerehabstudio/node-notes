console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
// yargs is a package to make it easier to interact with the command line
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];

// console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
    let addedNote = notes.addNote(argv.title, argv.body);

    addedNote ? console.log(`Created note -- Title: ${addedNote.title}, Body: ${addedNote.body}`)
    : console.log('This note already exists');

} else if (command === 'list') {
    allNotes = notes.getAll();

    if (allNotes) {
        allNotes.map((note) => console.log(`Title: ${note.title}, Body: ${note.body}`));
    } else {
        console.log('You have no notes');
    }

} else if (command === 'read') {
    let selectedNote = notes.getItem(argv.title);

    selectedNote ? console.log(`Title: ${selectedNote.title}, Body: ${selectedNote.body}`)
    : console.log('Note not found');

} else if (command === 'remove') {
    let noteRemoved = notes.remove(argv.title);

    noteRemoved ? console.log('Note removed') : console.log('Note not found');

} else {
    console.log(`${command} not recognized`);
}