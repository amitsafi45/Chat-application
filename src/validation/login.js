import Joi from 'joi'
const schema_login=Joi.object({
    emailAddress:Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required(),
    submit:Joi.string()
})
export default schema_login