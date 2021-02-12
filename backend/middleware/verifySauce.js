/* *****Middleware qui permet d'assurer que le nombre de caractères ne dépassent pas les recommandations et de restreindre le type de symboles utilisables***** */

// On importe le package mongoose-validator
const validate = require('mongoose-validator');

//* *****Midlleware nameValidator***** *//
// Validation du nom de la sauce
// Il doit contenir entre 3 et 60 caractères
// Regex pour restreindre le type de symboles utilisables
exports.nameValidator = [
	validate({
		validator: 'isLength',
		arguments: [3, 60],
		message: 'Le nom de votre Sauce doit contenir entre 3 and 60 caractères',
	}),
	validate({
		validator: 'matches',
		arguments: /^[a-z\d\-_\s]+$/i,
		message:
			'Vous ne pouvez utiliser que des chiffres et des lettres pour nommer votre sauce',
	}),
];
//* //////////////////// nameValidator END //////////////////// */

//* *****Midlleware manufacturerValidator***** *//
// Validation pour le manufacturer
// Il doit contenir entre 3 et 50 caratères
// Regex pour restreindre le type de symboles utilisables
exports.manufacturerValidator = [
	validate({
		validator: 'isLength',
		arguments: [3, 50],
		message: 'Le nom du fabricant doit contenir entre 3 et 40 caractères',
	}),
	validate({
		validator: 'matches',
		arguments: /^[a-z\d\-_\s]+$/i,
		message:
			'Vous ne pouvez utiliser que des chiffres et des lettres pour nommer le fabricant',
	}),
];
//* //////////////////// manufacturerValidator END //////////////////// */

//* *****Midlleware descriptionValidator***** *//
// Validation pour la description de la sauce
// Il doit contenir entre 10 et 150 caractères
// Regex pour restreindre le type de symboles utilisables
exports.descriptionValidator = [
	validate({
		validator: 'isLength',
		arguments: [10, 150],
		message:
			'La description de la sauce doit contenir entre 10 et 150 caractères',
	}),
	validate({
		validator: 'matches',
		arguments: /^[a-z\d\-_\s]+$/i,
		message:
			'Vous ne pouvez utiliser que des chiffres et des lettres pour la description de la sauce',
	}),
];
//* //////////////////// descriptionValidator END //////////////////// */

//* *****Midlleware ingredientValidator***** *//
// Validation pour le principal ingrédient de la sauce
// Le principal ingrédient doit contenir entre 3 et 100 caractères
// Regex pour restreindre le type de symboles utilisables
exports.ingredientValidator = [
	validate({
		validator: 'isLength',
		arguments: [3, 100],
		message: 'Le principal ingrédient doit contenir entre 3 et 20 caractères',
	}),
	validate({
		validator: 'matches',
		arguments: /^[a-z\d\-_\s]+$/i,
		message:
			'Vous ne pouvez utiliser que des chiffres et des lettres pour les ingrédients',
	}),
];
//* //////////////////// ingredientValidator END //////////////////// */
