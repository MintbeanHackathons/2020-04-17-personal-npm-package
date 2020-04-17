const cl = console.log;
cl.g = console.group;
cl.ge = console.groupEnd;
cl.cl = console.clear;
cl.er = console.error;

cl.help = () => {
  console.log(
    "These are the available methods: \n cl() = console.log() \n cl.g() = console.group() \n cl.ge() = console.groupEnd \n cl.cl() = console.clear() \n cl.er = console.error()"
  );
};

const isBrowser = new Function(
  "try {return this===window;}catch(e){ return false;}"
);

cl.txColor = (color) => {};

module.exports = {
  cl,
};
