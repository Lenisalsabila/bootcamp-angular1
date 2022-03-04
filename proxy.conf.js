const PROXY_CONFIG =[
  {
    context: [
      "/latihan"
    ],
    target:"http://localhost:4200",
    secure: false
  }
]
module.exports = PROXY_CONFIG;
