const Mock = require('mockjs');
const handler = require('./handler');
const path = require('path');
const proxyAjax = require('./proxy-ajax');
module.exports = app => {
    const mockDataPath = path.resolve(__dirname, 'mockData');
    const allData = handler.getAllData(mockDataPath);
    for (let key in allData) {
        if (proxyAjax.includes(key)) {
            app.all(key, (rep, res) => {
                res.json(Mock.mock(allData[key]));
            });
        }
    }
};
