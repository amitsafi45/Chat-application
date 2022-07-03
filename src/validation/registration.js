import Joi from 'joi'
const schema_registration=Joi.object({
    userName:Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    emailAddress:Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required(),
    submit:Joi.string()
})
export default schema_registration