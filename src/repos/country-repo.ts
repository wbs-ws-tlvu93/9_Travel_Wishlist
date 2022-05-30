import { Country, ICountry } from "@models/country-model"
import { getRandomInt } from "@shared/functions"

// /**
//  * Get one country.
//  *
//  * @param email
//  * @returns
//  */
// async function getOne(id: string): Promise<ICountry | null> {
//   return await Country.findById(new mongoose.Types.ObjectId(id));
// }

// /**
//  * See if a country with the given id exists.
//  *
//  * @param id
//  */
// async function persists(
//   id: number,
//   alpha2Code: string,
//   alpha3Code: string
// ): Promise<boolean> {
//   const query = await Country.exists({
//     $or: [{ id: id }, { alpha2Code: alpha2Code }, { alpha3Code: alpha3Code }],
//   });
//   if (query) return true;
//   return false;
// }

/**
 * Get all countries.
 *
 * @returns
 */
async function getAll(): Promise<ICountry[]> {
  const countries = await Country.find();
  return countries;
}

/**
 * Add one country.
 *
 * @param country
 * @returns
 */
async function add(country: ICountry): Promise<void> {
  country.id = getRandomInt();
  await Country.create(country);
  return;
}

// /**
//  * Update a country.
//  *
//  * @param country
//  * @returns
//  */
// async function update(country: ICountry): Promise<void> {
//   const db = await orm.openDb();
//   for (let i = 0; i < db.countries.length; i++) {
//     if (db.countries[i].id === country.id) {
//       db.countries[i] = country;
//       return orm.saveDb(db);
//     }
//   }
// }

// /**
//  * Delete one country.
//  *
//  * @param id
//  * @returns
//  */
// async function deleteOne(id: number): Promise<void> {
//   const db = await orm.openDb();
//   for (let i = 0; i < db.countries.length; i++) {
//     if (db.countries[i].id === id) {
//       db.countries.splice(i, 1);
//       return orm.saveDb(db);
//     }
//   }
// }

// Export default
export default {
  // getOne,
  // persists,
  getAll,
  add,
  // update,
  // delete: deleteOne,
} as const;
