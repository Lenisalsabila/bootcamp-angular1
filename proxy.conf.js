const PROXY_CONFIG =[
  {
    context: [
      "/latihan"
    ],
    target:"http://localhost:8082",
    secure: false
  }
]
module.exports = PROXY_CONFIG;
