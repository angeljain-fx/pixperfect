module.exports = (req, res, next) => {
  if(req.user.mailCredits < 1) {
    return res.status(403).send({ error: "You have crossed daily limit of sending projects!" });
  }

  next();
}
