import { Request, RequestHandler, Response, Router } from "express"
import { StatusCodes } from "http-status-codes"

import userService from "@services/user-service"
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
  //TODO: adjust code
  const users = await userService.getAll();
  return res.status(OK).json({ users });
}) as RequestHandler);
