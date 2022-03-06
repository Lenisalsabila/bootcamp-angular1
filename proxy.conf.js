const PROXY_CONFIG =[
  {
    context: [
      "/latihan"
    ],
    target:"http://localhost:8081",
    secure: false
  }
]
module.exports = PROXY_CONFIG;
