console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];

// console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    note ? console.log(`Created note -- Title: ${note.title}, Body: ${note.body}`)
    : console.log('This note already exists');
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getItem(argv.title);
} else if (command === 'remove') {
    notes.remove(argv.title);
} else {
    console.log(`${command} not recognized`);
}