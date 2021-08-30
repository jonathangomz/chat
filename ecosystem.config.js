module.exports = {
  apps : [{
    name: "chat",
    script: 'index.js',
  }],
   
  // Deployment Configuration
  deploy: {
    production: {
       "user" : "jony",
       "host" : "13.82.213.212",
       "ref"  : "origin/main",
       "repo" : "https://github.com/jonathangomz/chat.git",
       "path" : "/home/jony/www",
       "post-deploy" : "npm install && pm2 start chat"
    }
  }
};