import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import { ticketsService } from '@/services/tickets-service';
import { number } from 'joi';

export async function getAllTypes(req: AuthenticatedRequest, res: Response) {

  const allTypes = await ticketsService.getAllTypes()
  
  return res.status(httpStatus.OK).send(allTypes);
}

export async function getUserTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req

  const allTickets = await ticketsService.getTicket(userId)
  
  return res.status(httpStatus.OK).send(allTickets);
}

