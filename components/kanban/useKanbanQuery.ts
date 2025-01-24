import { COLLECTION_DEALS, DB_ID } from '@/app.constants';
import { useQuery } from '@tanstack/vue-query';
import { KANBAN_DATA } from './kanban.data';
import type { IDeal } from '@/types/deals.types';

export function useKanbanQuery() {
  return useQuery({
    queryKey: ['kanban'],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
    select(data) {
      const newBoard = [...KANBAN_DATA];
      const deals = data.documents as unknown as IDeal[];

      for (const deal of deals) {
        const column = newBoard.find(column => column.id === deal.status);
        if (column) {
          column.cards.push({
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            $createdAt: deal.$createdAt,
            companyName: deal.customer.name,
            status: deal.status,
          });
        }
      }

      return newBoard;
    },
  });
}
