var list, controller;

list = new noteList();
list.createNote("Monday: pick up drycleaning");
list.createNote("Tuesday: put up christmas tree");
list.createNote("Wednesday: eat cheese");
list.createNote("Thursday: hide snails");
list.createNote("Friday: open doors");
list.createNote("Saturday: hijack train");



controller = new noteController(list);
controller.addToIndex();
controller.loadContent();
