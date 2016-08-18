function testSingleNoteView() {
  var note = new Note("Hello, world!");
  var singleNoteView = new SingleNoteView(note);
  if (singleNoteView.note === note) {
    console.log("PASSED: SINGLE NOTE VIEW: Takes a note model.");
  } else {
    console.log("*FAILED: SINGLE NOTE VIEW: Takes a note model.");
  }
  var htmlString = singleNoteView.outputHTML();
  if (htmlString === "<div>Hello, world!</div>") {
    console.log("PASSED: SINGLE NOTE VIEW: outputHTML method.");
  } else {
    console.log("*FAILED: SINGLE NOTE VIEW: outputHTML method.");
  }
}



testSingleNoteView();
