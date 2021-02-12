/* *****Middleware qui permet d'assurer que les mots de passe sont assez sécurisés***** */

// On importe notre model passwordSchema
const passwordSchema = require('../models/password');

//* *****Midlleware verifyPassword***** *//
//Vérifie que le mot de passe valide le schema et le regex
module.exports = (req, res, next) => {
	const regexPassword = /[§!='@#$%^&*().?":{}|<>]/;
	if (
		!passwordSchema.validate(req.body.password) ||
		regexPassword.test(req.body.password)
	) {
		res.writeHead(
			400,
			'{"message":"Mot de passe requis : 8 caractères minimun. Au moins 1 majuscule, 1 minuscule, 1 chiffre, sans espaces et sans caractères spéciaux"}',
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
