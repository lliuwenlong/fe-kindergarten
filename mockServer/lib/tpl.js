/**
 * @file 模版
 */
exports.success = () => {
    return {
        status: 200,
        data: {},
        errorCode: null
    };
};

exports.fail = status => {
    return {
        status: status || 400,
        data: {},
        errorCode: {}
    };
}