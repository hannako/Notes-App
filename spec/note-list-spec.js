// 1. Stores an array of note models.this.notes = []

//2. Has a method that will return all the note models stored in the array.

// 3. Has a method that creates a new note model
// and stores it. This function
// takes the text of a note as an argument.

function testHasArrayOfNotes (){
  var list = new noteList();
  if (list.notes.length === 0) {
    console.log("PASSED: NOTE LIST: Has array of Notes ");
  }
  else {
    console.log("*FAILED: NOTE LIST: Has array of Notes");
  }
}

function testReturnsArrayofNotes (){
  var list = new noteList();
  list.createNote('text');
  if (list.getAllNotes()[0].text === "text") {
    console.log("PASSED: NOTE LIST: Returns array of notes");
  }
  else {
    console.log("*FAILED: NOTE LIST: Returns array of notes");
  }
}

function testCreateNote(){
  var list = new noteList();
  list.createNote('text');
  if (list.notes.length === 1) {
    console.log("PASSED: NOTE LIST: Creates Note ");
  }
  else {
    console.log("*FAILED: NOTE LIST: Creates Note");
  }
}

function testNoteHasUniqueID() {
  var list = new noteList();
  list.createNote('Here is my note.');
  list.createNote('This is my note.');
  if (list.notes[1].id === 1) {
    console.log("PASSED: NOTE LIST: creates ID.");
  } else {
    console.log("*FAILED: NOTE LIST: creates ID.");
  }
}


testHasArrayOfNotes();
testCreateNote();
testReturnsArrayofNotes();
testNoteHasUniqueID();
