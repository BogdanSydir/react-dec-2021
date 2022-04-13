import Joi from "joi"

const carValidator = Joi.object({
    // model:Joi.string().min(2).max(20).required().messages({
    //     'string.empty':'model is empty',
    //     'string.min':'model is less than 2 symb',
    //     'string.max':'model is longer than 20'
    // }),
    model:Joi.string().regex(/^[a-zA-Zа-яА-ЯіІєЄёЁїЇ]{1,20}$/).messages({
        'string.pattern.base':'only letters, min 1, max 20'
    }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {carValidator}