import { ICountry } from "@models/country-model"
import countryRepo from "@repos/country-repo"
import { UserNotFoundError } from "@shared/errors"

/**
 * Get all users.
 *
 * @returns
 */
function getAll(): Promise<ICountry[]> {
  return countryRepo.getAll();
}

/**
 * Get one user by id.
 *
 * @returns
 */
function getOne(code: string): Promise<ICountry | null> {
  return countryRepo.getOne(code);
}

/**
 * Add one user.
 *
 * @param user
 * @returns
 */
function addOne(country: ICountry): Promise<void> {
  return countryRepo.add(country);
}

/**
 * Update one user.
 *
 * @param user
 * @returns
 */
async function updateOne(user: ICountry): Promise<void> {
  return countryRepo.update(user);
}

/**
 * Delete a user by their code.
 *
 * @param id
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
