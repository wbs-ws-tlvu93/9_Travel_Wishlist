import Joi from "joi"
import mongoose, { Schema } from "mongoose"

// Country schema
export interface ICountry {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
}

// Mongoose Schema
const countrySchema = new Schema<ICountry>({
  name: {
    type: String,
    required: [true, 'Validation failed, name is missing'],
  },
  alpha2Code: {
    type: String,
    required: [true, 'Validation failed, alpha2Code is missing'],
  },
  alpha3Code: {
    type: String,
    required: [true, 'Validation failed, alpha3Code is missing'],
  },
});

// Mongoose Model
export const Country = mongoose.model<ICountry>('Country', countrySchema);

// JOI Schema
export const countrySchemaJOI = Joi.object({
  name: Joi.string().required(),
  alpha2Code: Joi.string().required(),
  alpha3Code: Joi.string().required(),
});

/**
 * Get a new Country object.
 *
 * @returns
 */
function getNew(
  name: string,
  alpha2Code: string,
  alpha3Code: string
): ICountry {
  return {
    name,
    alpha2Code,
    alpha3Code,
  };
}

/**
 * Copy a country object.
 *
 * @param country
 * @returns
 */
function copy(country: ICountry): ICountry {
  return {
    name: country.name,
    alpha2Code: country.alpha2Code,
    alpha3Code: country.alpha3Code,
  };
}

// Export default
export default {
  new: getNew,
  copy,
  Country,
};
