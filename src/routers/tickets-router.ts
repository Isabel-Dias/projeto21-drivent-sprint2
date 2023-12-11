import { Router } from 'express';
import { authenticateToken} from '@/middlewares';
import { getUserTicket, getAllTypes } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/types', getAllTypes)
  .get('/', getUserTicket)

export { ticketsRouter };