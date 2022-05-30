import Model, { ICountry } from "@models/country-model"
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

// /**
//  * Add one user.
//  *
//  * @param user
//  * @returns
//  */
// function addOne(user: ICountry): Promise<void> {
//   return userRepo.add(user);
// }

// /**
//  * Update one user.
//  *
//  * @param user
//  * @returns
//  */
// async function updateOne(user: ICountry): Promise<void> {
//   const persists = await userRepo.persists(user.id);
//   if (!persists) {
//     throw new UserNotFoundError();
//   }
//   return userRepo.update(user);
// }

// /**
//  * Delete a user by their id.
//  *
//  * @param id
//  * @returns
//  */
// async function deleteOne(id: number): Promise<void> {
//   const persists = await userRepo.persists(id);
//   if (!persists) {
//     throw new UserNotFoundError();
//   }
//   return userRepo.delete(id);
// }

// Export default
export default {
  getAll,
  // addOne,
  // updateOne,
  // delete: deleteOne,
} as const;
