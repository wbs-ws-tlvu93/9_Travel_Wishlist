import { Request, RequestHandler, Response, Router } from "express"
import { StatusCodes } from "http-status-codes"

import Country, { countrySchemaJOI, ICountry } from "@models/country-model"
import countryService from "@services/country-service"
import asyncHandler from "@shared/asyncHandler"
import { ParamMissingError } from "@shared/errors"
import validateJOI from "@shared/validateJOI"

// constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
  get: '/',
  getCode: '/:code',
  post: '/',
  update: '/:code',
  delete: '/:code',
} as const;

/**
 * Get all countries.
 */
router.get(p.get, (async (_: Request, res: Response) => {
  const countries = await countryService.getAll();
  return res.status(OK).json({ countries });
}) as RequestHandler);

/**
 * Get one country.
 */
router.get(p.getCode, (async (req: Request, res: Response) => {
  const { code } = req.params;
  // Check params
  if (!code) {
    throw new ParamMissingError();
  }
  const country = await countryService.getOne(code);
  return res.status(OK).json({ country });
}) as RequestHandler);

/**
 * Add one country
 */
router.post(
  p.post,
  validateJOI(countrySchemaJOI),
  asyncHandler((async (req: Request, res: Response) => {
    const country: ICountry = req.body;

    // Check params
    if (!country.name || !country.alpha2Code || !country.alpha3Code) {
      throw new ParamMissingError();
    }

    await countryService.addOne(country);

    return res.status(CREATED).end();
  }) as RequestHandler)
);

/**
 * Update one country
 */
router.put(
  p.update,
  validateJOI(countrySchemaJOI),
  asyncHandler((async (req: Request, res: Response) => {
    const { country }: { country: ICountry } = req.body;

    // Check params
    if (!country) {
      throw new ParamMissingError();
    }

    // Update data
    await countryService.updateOne(country);

    return res.status(CREATED).end();
  }) as RequestHandler)
);

/**
 * Delete one country by their country code
 */
router.delete(p.delete, (async (req: Request, res: Response) => {
  const { code } = req.params;
  // Check params
  if (!code) {
    throw new ParamMissingError();
  }

  const country = await countryService.delete(code);
  return res.status(OK).json({ country });
}) as RequestHandler);

export default router;
