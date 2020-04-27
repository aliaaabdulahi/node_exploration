const os = require('os');

// platform
console.log(os.platform()); //returns os platform, for mac should be darwin

// cpu arch
console.log(os.arch());

// cpu core info
console.log(os.cpus()); //returns obj of core info abt cpu

// free memory
console.log(os.freemem()); // returns amount of free memory

// total memory
console.log(os.totalmem()); // returns amount of total memory

// home dir
console.log(os.homedir()); // returns home directory

// uptime
console.log(os.uptime()); // returns # of seconds of uptime of device