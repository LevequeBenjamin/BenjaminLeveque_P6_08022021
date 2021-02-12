/* *****Middleware qui permet de restreindre le nombre de tentative d'authentification***** */

// On importe le package express-rate-limit
const bruteForce = require("express-rate-limit");

//* *****Midlleware bruteForce***** *//
// 3 tentatives maximum avant d'être bloqué 5 min
module.exports = bruteForce({
  max:3,
  windowMs: 5 * 60 * 1000,
  message: "Vous avez atteint la maximum d'essais, veuillez retenter dans 5 minutes !"
});
//* //////////////////// bruteForce END //////////////////// */

