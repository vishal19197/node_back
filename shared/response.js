/**
 * global response method which is used to send the response from anywhere.
 * ===================================================================================================
 * @param {*} res 
 * @param {*} message 
 * @param {*} data 
 * @param {*} status 
 * @param {*} code 
 */
module.exports.sendResponse = (res, message, data, status = 0, code = 200) => {
    return res = {
        error: status,
        message: message,
        status:code,
        data: data
    };
};

exports.INVALID = "INVALID.";
exports.INVALID_MESSAGE = "PLEASE PROVIDE VALID VALUES FOR ALL PERAMETERS.";
exports.MISSING = "MISSING.";
exports.MISSING_MESSAGE = "PLEASE PROVIDE VALID VALUES FOR ALL PERAMETERS.";
exports.UNAUTHORIZED = "UNAUTHORIZED.";
exports.UNAUTHORIZED_MESSAGE = "YOU ARE NOT ALLOWED TO PERFORM THIS TASK.";
exports.ALLOWED = "ALLOWED.";
exports.NOT_ALLOWED = "NOT ALLOWED.";
exports.NO_DATA_FOUND = "NO DATA FOUND.";
exports.NO_MATCH_FOUND = "NO MATCH FOUND.";
exports.INVALID_TOKEN = "INVALID TOKEN.";
exports.INVALID_TOKEN_MESSAGE = "Token Hase Expired or Invalid.";
exports.SUCCESS = "SUCCESS.";
exports.NOT_FOUND = "NOT FOUND.";
exports.FILE_NOT_FOUND = "FILE NOT FOUND.";
exports.SERVER_ERROR = "INTERNAL SERVER ERROR.";
exports.NOT_AVAILABLE = "NOT AVAILABLE.";
exports.VALIDATION_ERROR = "VALIDATION ERROR.";
exports.VALIDATION_ERROR_MESSAGE = "Error while Validating.";
exports.COUNTER = "Counter.";
exports.AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR.";
