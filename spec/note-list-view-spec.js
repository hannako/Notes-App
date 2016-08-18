
function testListView_one() {
  var list = new noteList();
  list.createNote("Hello Nobuyuki Fujioka Hello Nobuyuki Fujioka");
  list.createNote("Hello Nobuyuki Fujioka Hello Nobuyuki Fujioka");
  var listView = new ListView(list);
  var string = listView.turnIntoHtml();

  if (string ===
   "<ul><li><div><a href=#0>Hello Nobuyuki Fujio</a></div></li><li><div><a href=#1>Hello Nobuyuki Fujio</a></div></li></ul>" ) {
    console.log("PASSED: NOTE LIST VIEW: creates an HTML string of 20c");
  }
  else {
    console.log("*FAILED: NOTE LIST VIEW:creates an HTML string of 20c");
  }
}

function testListView_two(){
  var list = new noteList();
  var listView = new ListView(list);
  if (listView.turnIntoHtml() === '<ul></ul>') {
    console.log("PASSED: NOTE LIST VIEW: works for empty lists: passed");
  }
  else {
    console.log("*FAILED: NOTE LIST VIEW: works for empty lists: failed");
  }
}

function testListView_three(){
  var list = new noteList();
  list.createNote("Hello Nobuyuki Fujioka Hello Nobuyuki Fujioka");
  var listView = new ListView(list);
  if (listView.turnIntoHtml() ===
"<ul><li><div><a href=#0>Hello Nobuyuki Fujio</a></div></li></ul>" ) {
    console.log("PASSED: NOTE LIST VIEW: adds a href tag: passed");
  }
  else {
    console.log("*FAILED: NOTE LIST VIEW: adds a href tag");
  }

}


testListView_one();
testListView_two();
testListView_three();
