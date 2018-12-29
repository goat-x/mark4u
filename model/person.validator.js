const Joi = require('joi')

const personSchema = Joi.object().keys({
  name: Joi.string().required(),
  birthday: [Joi.date().optional(), Joi.string().optional()]
}).with('name').without('birthday')

const personValidator = (person) => Joi.validate(person, personSchema)

module.exports = personValidator
