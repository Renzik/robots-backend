import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Robot } from '../db/models/Robot';

export const fetchRobots = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const robots = await Robot.find();
    res.status(200).json(robots);
  } catch (err) {
    console.error('Request rejected and catched: ', err);
  }
});
