import { Request, RequestHandler, Response, Router } from "express"
import { StatusCodes } from "http-status-codes"

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

export default router;
