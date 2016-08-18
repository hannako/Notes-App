// Using TDD, update your note-controller.js to load content for the single note page. The note controller code should listen for hashchange events. When one happens, if the new browser URL is for a single note page, it should use the app element to set the web page content to the HTML for that note.
//  Go to http://localhost:8080 in your browser. You should be able to click on a note and see the full text of that note. There should be no page refresh.



(function(exports){
  var List;
  function noteController(list){
    this.view = new ListView(list);
    List = this.view.listOfNotes;
  }
  noteController.prototype.addToIndex = function() {
    document.getElementById("app").innerHTML =
      this.view.turnIntoHtml();
  };

  noteController.prototype.loadContent = function(){
    window.addEventListener("hashchange", this.getContent);
  };

  noteController.prototype.getContent = function () {
      var id = window.location.hash.split("#")[1];

    var singleNoteView = new SingleNoteView(List.notes[id]);
    var singleNoteHTML = singleNoteView.outputHTML();
    document.getElementById("app2").innerHTML = singleNoteHTML;
  };



exports.noteController = noteController;

}) (this);
