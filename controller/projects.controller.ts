import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Project } from '../db/models/Project';

export const fetchProjects = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (err) {
      console.error('Request rejected and catched: ', err);
    }
  }
);
