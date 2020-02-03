const {spawn} = require("child_process");
const tput = spawn(["tput", "-T", process.env["TERM"]);
tput.stdout.pipe(process.stdout);
tput.stderr.pipe(process.stderr);
