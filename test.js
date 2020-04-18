const { cl } = require("./logger");
cl.setTextColor("red");
cl.g();
cl("testing this");
cl.setTextColor("cyan");

cl("is this still working?");
cl.ge();
cl("okay I guess?");

// cl.help();
cl.er("This is a test");
