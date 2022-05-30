import { NextFunction, Request, Response } from "express"
import Joi from "joi"

const validateJOI =
  (schema: Joi.ObjectSchema) =>
  (req: Request, _: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    return error ? next(error) : next();
  };

export default validateJOI;
