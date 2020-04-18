const isBrowser = new Function(
  "try {return this===window;}catch(e){ return false;}"
);

const cl = console.log;
cl.g = (msg = "", color = cl.color) => console.group(color, msg);
cl.ge = (msg, color = cl.color) => console.groupEnd(color, msg);
cl.cl = (msg, color = cl.color) => console.clear(color, msg);
cl.er = (msg, color = cl.color) => console.error(color, msg);

cl.help = () => {
  console.log(
    "These are the available methods: \n cl() = console.log() \n cl.g() = console.group() \n cl.ge() = console.groupEnd \n cl.cl() = console.clear() \n cl.er = console.error() \n cl.setTextColor(<color>) sets the text color in node. \n cl.colorHelp() shows available text colors."
  );
};

cl.setTextColor = (selectedColor) => {
  colors = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };
  cl.color = colors[selectedColor];
  if (colors[selectedColor] === undefined) {
    console.warn("Invalid color input. For available options use cl.colorHelp");
  }
};

cl.colorHelp = () => {
  console.log(
    "available text colors are:\nblack, red, green, yellow, blue, magenta, cyan, white."
  );
};

cl.clearTextColor = () => {
  cl.color = "\x1b[37m";
};

cl.color = "\x1b[37m";

module.exports = {
  cl,
};
