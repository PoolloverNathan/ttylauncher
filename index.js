const {spawn} = require("child_process");
function tput() {
	var tput = spawn(["tput", "-T", process.env["TERM"]]);
	tput.stdout.pipe(process.stdout);
	tput.stderr.pipe(process.stderr);
	tputi = tput.stdin;
	tputi.write("civis\n");
	tputi.write("smcup\n");
	proces.on("beforeExit", () => {
		tputi.write("rmcup\n");
		tputi.write("cnorm\n");
		tputi.end();
		tput.kill("SIGTERM"); // I am explicit
		tput.unref();
	});
	return tputi;
}

var tput = tput();