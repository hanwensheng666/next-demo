let os = require('os');

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 获取本机ip地址
function getLocalIpAddress() {
  let ip = '';
  let netInfo = os.networkInterfaces();
  let osType = os.type();
  if (osType === 'Windows_NT') {
    for (const dev in netInfo) {
      // win7的网络信息中显示为本地连接，win10显示为以太网
      if (dev === '本地连接' || dev === '以太网') {
        for (let j = 0; j < netInfo[dev].length; j++) {
          if (netInfo[dev][j].family === 'IPv4') {
            ip = netInfo[dev][j].address;
            break;
          }
        }
      }
    }
  } else if (osType === 'Linux') {
    ip = netInfo.eth0[0].address;
  }
  return ip;
}

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe', ip: getLocalIpAddress(), env: process.env.NODE_ENV });
};
