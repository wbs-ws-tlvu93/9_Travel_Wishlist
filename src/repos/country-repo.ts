import { Country, ICountry } from "@models/country-model"

/**
 * Get one country.
 *
 * @param code
 * @returns
 */
async function getOne(code: string): Promise<ICountry | null> {
  return await Country.findOne({
    $or: [{ alpha2Code: code }, { alpha3Code: code }],
  });
}

/**
 * See if a country with the given id exists.
 *
 * @param id
 */
async function persists(country: ICountry): Promise<boolean> {
  const query = await Country.exists({
    $or: [
      { alpha2Code: country.alpha2Code },
      { alpha3Code: country.alpha3Code },
    ],
  });
  if (query) return true;
  return false;
}

/**
 * Get all countries.
 *
 * @returns
 */
async function getAll(): Promise<ICountry[]> {
  return await Country.find();
}

/**
 * Add one country.
 *
 * @param country
 * @returns
 */
async function add(country: ICountry): Promise<void> {
  const exist = await persists(country);
  if (exist) throw Error('Country already exist');

  await Country.create(country);
}

/**
 * Update a country.
 *
 * @param country
 * @returns
 */
async function update(country: ICountry): Promise<void> {
  const filter = {
    $or: [
      { alpha2Code: country.alpha2Code },
      { alpha3Code: country.alpha3Code },
    ],
  };
  await Country.findOneAndUpdate(filter, country);
}

/**
 * Delete one country.
 *
 * @param code
 * @returns
 */
async function deleteOne(code: string): Promise<void> {
  await Country.deleteOne({
    $or: [{ alpha2Code: code }, { alpha3Code: code }],
  });
}

// Export default
export default {
  getOne,
  // persists,
  getAll,
  add,
  update,
  delete: deleteOne,
} as const;
