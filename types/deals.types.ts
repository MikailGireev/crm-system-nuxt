export interface IBaseFields {
  $createdAt: string;
  $id: string;
}

export interface ICustomer extends IBaseFields {
  name: string;
  email: string;
  avatar_url: string;
  from_source?: string;
}

export interface IComment extends IBaseFields {
  text: string;
}

export enum EnumStatus {
  'todo' = 'todo',
  'to-be-agreed' = 'to-be-agreed',
  'in-progress' = 'in-progress',
  'produced' = 'produced',
  'done' = 'done',
}

export interface IDeal extends IBaseFields {
  comments: IComment[];
  customer: ICustomer;
  name: string;
  price: number;
  companyName: string;
  status: EnumStatus;
}
