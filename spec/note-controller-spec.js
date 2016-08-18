// Using TDD, update your note-controller.js to load content for the single note page. The note controller code should listen for hashchange events. When one happens, if the new browser URL is for a single note page, it should use the app element to set the web page content to the HTML for that note.
//  Go to http://localhost:8080 in your browser. You should be able to click on a note and see the full text of that note. There should be no page refresh.


function testNoteController(){
  // var list = new noteList();
  // list.createNote("testing testing 123");
  var lists;
  var controller = new noteController(lists);
  if (controller !== null) {
    console.log("PASSED: NOTE CONTROLLER:can be instantiated");
  }
  else {
    console.log("*FAILED: NOTE CONTROLLER:can be instantiated.");
  }
}

function testNoteController_2(){
  var list = new noteList();

  list.createNote("testing testing 123");

  var controller = new noteController(list);
  controller.addToIndex();

  if (document.getElementById("app").innerHTML ===
 '<ul><li><div><a href="#0">testing testing 123</a></div></li></ul>') {
    console.log("PASSED: NOTE CONTROLLER.addToIndex method");
  }
  else {
    console.log("*FAILED: NOTE CONTROLLER.addToIndex method");
  }
}

function testNoteController_3 () {
  var list = new noteList();
  list.createNote("testing testing 123 hello world cool");

  var controller = new noteController(list);
  controller.addToIndex();
  window.addEventListener("hashchange", checkContent);

     function checkContent(){
      var displayStr = document.getElementById("app2").innerHTML;
        if (displayStr === '<ul><li><div><a href="#0">testing testing 123 hello world cool</a></div></li></ul>') {
        console.log("PASSED : NOTE CONTROLLER. loading content method");
      } else {
        console.log("*FAILED: NOTE CONTROLLER. loading content method");
      }
    }

}

testNoteController();
testNoteController_2();
testNoteController_3();
