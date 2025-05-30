const { getUser } = require("../services/auth");

function restrictToLoggedInUsersOnly(req, res, next) {
  const uid = req.cookies.uid;
  if (!uid) res.redirect("/login");
  const user = getUser(uid);
  if (!user) return res.render("login");
  // This req.user is used for the createdBy variable in the next middleware or router
  req.user = user;
  next();
}

module.exports = restrictToLoggedInUsersOnly;
