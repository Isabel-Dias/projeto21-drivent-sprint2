import { notFoundError } from '@/errors';
import { enrollmentRepository } from '@/repositories';
import { ticketsRepository } from '@/repositories/tickets-repository';

async function getAllTypes() {
  
  const result = await ticketsRepository.findMany();

  return result
}

async function getTicket(userId: number) {
  const enrollmentExists = await enrollmentRepository.findWithAddressByUserId(userId)

  if(!enrollmentExists) {
    throw notFoundError();
  }

  const enrollmentId = enrollmentExists.id
  
  const result = await ticketsRepository.getTicket(enrollmentId);

  if(!result) {
    throw notFoundError();
  }

  return result
}


export const ticketsService = {
  getAllTypes,
  getTicket
}