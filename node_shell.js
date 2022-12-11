const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'50cb91b3-c1f3-4aaf-bd0e-e0a1846163e4'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
