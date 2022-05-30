import mongoose, { Schema } from "mongoose"

// Country schema
export interface ICountry {
  id: number;
  name: string;
  alpha2Code: string;
  alpha3Code: string;
}

const countrySchema = new Schema<ICountry>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  alpha2Code: { type: String, required: true },
  alpha3Code: { type: String, required: true },
});

export const Country = mongoose.model<ICountry>('Country', countrySchema);

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
    id: -1,
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
    id: country.id,
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
