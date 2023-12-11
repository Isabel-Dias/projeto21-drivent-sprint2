import { prisma } from '@/config';
import { TicketType } from '@prisma/client';

async function findMany(): Promise<TicketType[]> {
  return prisma.ticketType.findMany();
}

async function getTicket(enrollmentId: number): Promise<TicketWithTypes> {

    return prisma.ticket.findFirst({
    include: {
        TicketType: true,
    },
    where: {
        enrollmentId,
    }
  });
}

export const ticketsRepository = {
  findMany,
  getTicket,
};

export type TicketWithTypes = {
  id: number;
  status: string;
  ticketTypeId: number;
  enrollmentId: number;
  TicketType: {
    id: number;
    name: string;
    price: number;
    isRemote: boolean;
    includesHotel: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
};
