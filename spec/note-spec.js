function testNoteStoresText() {
  var note = new Note("some text");
  if (note.text === "some text") {
    console.log("PASSED: NOTE SPEC: Stores text");
  } else {
    console.log("*FAILED:  NOTE SPEC: Stores text");
  }
}

function testNoteReturnText() {
  var note = new Note("some text");
  if (note.returnNoteText() === "some text") {
    console.log("PASSED: NOTE SPEC: Returns text");
  } else {
  console.log("*FAILED:  NOTE SPEC: Returns text");
}
}

testNoteStoresText();
testNoteReturnText();
