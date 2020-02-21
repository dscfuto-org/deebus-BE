exports.successResponse = function (res, msg) {
  const data = {
    status: 0,
    message: msg,
  };
  return res.status(404).json(data);
};
export const successResponse = function (res, msg) {
  const data = {
    status: 1,
    message: msg
  };
  return res.status(200).json(data);
};

export const successResponseWithData = function (res, data, msg) {
  const resData = {
    status: 1,
    message: msg,
    data
  };
  return res.status(200).json(resData);
};

export const ErrorResponse = function (res, msg) {
  const data = {
    status: 0,
    message: msg,
  };
  return res.status(500).json(data);
};

export const notFoundResponse = function (res, msg) {
  const data = {
    status: 0,
    message: msg,
  };
  return res.status(404).json(data);
};

export const validationErrorWithData = function (res, data) {
  const resData = {
    status: 0,
    message: msg,
    data
  };
  return res.status(400).json(resData);
};

export const unauthorizedResponse = function (res, msg) {
  const data = {
    status: 0,
    message: msg,
  };
  return res.status(401).json(data);
};
