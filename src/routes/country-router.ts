import { Request, RequestHandler, Response, Router } from "express"
import { StatusCodes } from "http-status-codes"

import Country, { ICountry } from "@models/country-model"
import countryService from "@services/country-service"
import { ParamMissingError } from "@shared/errors"

// constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
  get: '/',
  getCode: '/:code',
  post: '/',
  put: '/:code',
  delete: '/:code',
} as const;

/**
 * Get all users.
 */
router.get(p.get, (async (_: Request, res: Response) => {
  const countries = await countryService.getAll();
  return res.status(OK).json({ countries });
}) as RequestHandler);

router.post(p.post, (async (req: Request, res: Response) => {
  const { country }: { country: ICountry } = req.body;
  console.log(country);
  if (!country) {
    throw new ParamMissingError();
  }
  // Fetch data
  const newCountry = Country.new(
    country.name,
    country.alpha2Code,
    country.alpha3Code
  );

  await countryService.addOne(newCountry);

  return res.status(CREATED).end();
}) as RequestHandler);

export default router;
