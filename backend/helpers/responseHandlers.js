const successResponse = (res, msg) => {
    const data = { success: 1, message: msg };
    return res.status(200).json(data);
};

const successResponseWithData = (res, msg, data) => {
    const resData = { success: 1, message: msg, data: data };
    return res.status(200).json(resData);
};

const errorResponse = (res, msg) => {
    const data = { success: 0, message: msg };
    return res.status(500).json(data);
};

const notFoundResponse = (res, msg) => {
    const data = { success: 0, message: msg };
    return res.status(404).json(data);
};

const validationErrorWithData = (res, msg, data) => {
    const resData = { success: 0, message: msg, data: data };
    return res.status(400).json(resData);
};

const unauthorizedResponse = (res, msg) => {
    const data = { success: 0, message: msg };
    return res.status(401).json(data);
};

module.exports = {
    successResponse,
    successResponseWithData,
    errorResponse,
    notFoundResponse,
    validationErrorWithData,
    unauthorizedResponse
};
