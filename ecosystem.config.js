module.exports = {
	apps: [{
	name: "directfromowner",
	script: "npm",
	args: "start",
	watch: true,
	env: {
	NODE_ENV: "production",
	PORT: 1339,
	}
	}]


}
