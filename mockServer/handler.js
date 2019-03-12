/**
 * @file mockServer 公用方法
 */
const fs = require('fs');
const path = require('path');
const getAllData = (filePath, filesList) => {
    const fileDir = fs.readdirSync(filePath);
    fileDir.forEach(filename => {
        const filedir = path.join(filePath, filename);
        const stats = fs.statSync(filedir);
        const isFile = stats.isFile();//是文件
        const isDir = stats.isDirectory();
        if(isFile){
            const content = require(filedir);
            const key = `/${filename.slice(0, filename.indexOf('.')).replace(/_/g, '/')}`;
            filesList[key] = content;
        }
        if(isDir){
            getAllData(filedir, filesList);
        }
    });
};
exports.getData = filePath => {
    const file = require('./mockData/post/user_userinfo.js');
    return file;
};

exports.getAllData = filePath => {
    const filesList = {};
    getAllData(filePath, filesList);
    return filesList;
}
