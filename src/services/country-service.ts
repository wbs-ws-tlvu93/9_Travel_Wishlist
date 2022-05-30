import { ICountry } from "@models/country-model"
import countryRepo from "@repos/country-repo"

/**
 * Get all countriess.
 *
 * @returns
 */
function getAll(): Promise<ICountry[]> {
  return countryRepo.getAll();
}

/**
 * Get one country by id.
 *
 * @returns
 */
function getOne(code: string): Promise<ICountry | null> {
  return countryRepo.getOne(code);
}

/**
 * Add one country.
 *
 * @param country
 * @returns
 */
function addOne(country: ICountry): Promise<void> {
  return countryRepo.add(country);
}

/**
 * Update one country.
 *
 * @param country
 * @returns
 */
async function updateOne(country: ICountry): Promise<void> {
  return countryRepo.update(country);
}

/**
 * Delete a country by their code.
 *
 * @param code
 * @returns
 */
async function deleteOne(code: string): Promise<void> {
  return countryRepo.delete(code);
}

// Export default
export default {
  getAll,
  getOne,
  addOne,
  updateOne,
  delete: deleteOne,
} as const;
