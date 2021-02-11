/* *****Middleware qui permet d'assurer que les mots de passe sont assez sécurisés***** */

// On importe notre model passwordSchema
const passwordSchema = require('../models/password');

//* *****Midlleware verifyPassword***** *//
// Vérifie que le mot de passe valide le schema
module.exports = (req, res, next) => {
	//const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!passwordSchema.validate(req.body.password) /*&& !regexPassword.test(req.body.password)*/ ) {
		res.writeHead(
			400,
			'{"message":"Mot de passe requis : 8 caractères minimun. Au moins 1 Majuscule, 1 minuscule, 1 chiffre et Sans espaces"}',
			{
				'content-type': 'application/json',
			},
		);
		res.end('Format de mot de passe incorrect');
	} else {
		next();
	}
};
//* //////////////////// verifyPassword END //////////////////// */
