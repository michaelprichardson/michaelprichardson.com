module.exports = {
  apps : [
      {
        name: "website",
        script: "./ssr-server.js",
        instances: "max",
        exec_mode: "cluster",
        watch: false,
        env_dev: {
            "PORT": 5000,
            "NODE_ENV": "dev"
        },
        env_production: {
            "PORT": 5000,
            "NODE_ENV": "production"
        }
      }
  ]
}
