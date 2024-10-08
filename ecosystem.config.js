module.exports = {
	apps: [
		{
			name: "MWIP",
			script: "./src/webserver.js",
			max_memory_restart: "1G",
			out_file: "./logfile",
			error_file: "./errorfile"
		}
	]
}