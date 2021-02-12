/* *****Middleware pour que les utilisateurs puissent liker ou disliker une sauce***** */

// Récupération du modèle sauce
const Sauce = require('../models/Sauce');

//* *****Midlleware like***** *//
// On va chercher l'objet Sauce gràce à son id
// Si un utilisateur like une sauce, et qu'il n'a pas déjà liké cette sauce, on traite le like
// sinon si un utilisateur dislike une sauce, et qu'il n'a pas déjà liké cette sauce, on traite le dislike
// Sinon : 
		/* Un utilisateur qui a liké une sauce pourra retirer son like */
		/* Un utilisateur qui a disliké une sauce pourra retirer son dislike */
module.exports = (req, res, next) => {
	let message = '';
	Sauce.findOne({ _id: req.params.id })
		.then(sauce => {
			if (req.body.like == 1 && sauce.usersLiked.indexOf(req.body.userId) < 0) {
				sauce.usersLiked.push(req.body.userId);
				sauce.likes += 1;
				message = "J'aime ajouté !";
			} else if (
				req.body.like == -1 &&
				sauce.usersDisliked.indexOf(req.body.userId) < 0
			) {
				sauce.usersDisliked.push(req.body.userId);
				sauce.dislikes += 1;
				message = 'Dislike ajouté !';
			} else {
				sauce.usersLiked.forEach(element => {
					if (element == req.body.userId) {
						sauce.likes -= 1;
						sauce.usersLiked.splice(
							sauce.usersLiked.indexOf(req.body.userId),
							1,
						);
					}
				});
				sauce.usersDisliked.forEach(element => {
					if (element == req.body.userId) {
						sauce.dislikes -= 1;
						sauce.usersDisliked.splice(
							sauce.usersDisliked.indexOf(req.body.userId),
							1,
						);
					}
				});
			}
			req.body.sauce = sauce;
			req.body.message = message;
			next();
		})
		.catch(error => res.status(400).json({ error }));
};
//* //////////////////// like END //////////////////// *//
