import mongoose from "mongoose"

import { Country, ICountry } from "@models/country-model"
import { getRandomInt } from "@shared/functions"

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
  return await Country.find();
}

/**
 * Add one country.
 *
 * @param country
 * @returns
 */
async function add(country: ICountry): Promise<void> {
  await Country.create(country);
}

/**
 * Update a country.
 *
 * @param country
 * @returns
 */
async function update(country: ICountry): Promise<void> {
  await Country.findOneAndUpdate(country);
}

/**
 * Delete one country.
 *
 * @param id
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
