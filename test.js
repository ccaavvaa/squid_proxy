const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

const proxy = "http://test:test@127.0.0.1:9090";

(async () => {
    const proxyAgent = new HttpsProxyAgent(proxy);
    const response = await fetch('https://medium.com', { agent: proxyAgent});
    const body = await response.text();
    console.log(body);
})();