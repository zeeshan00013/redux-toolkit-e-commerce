exports.middleWare = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    success: false,
    message: "something went wrong",
    err,
  });
};
