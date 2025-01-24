import { EnumStatus } from './../../types/deals.types';
import type { IColumn } from './kanban.types';

export const KANBAN_DATA: IColumn[] = [
  {
    id: EnumStatus.todo,
    name: 'Входящие',
    cards: [],
  },
  {
    id: EnumStatus['to-be-agreed'],
    name: 'На согласовании',
    cards: [],
  },
  {
    id: EnumStatus['in-progress'],
    name: 'В процессе',
    cards: [],
  },
  {
    id: EnumStatus['produced'],
    name: 'Произведено',
    cards: [],
  },
  {
    id: EnumStatus['done'],
    name: 'Выполнено',
    cards: [],
  },
];
