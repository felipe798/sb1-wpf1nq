export interface User {
  id: number;
  username: string;
  email: string;
  role: 'ADMIN' | 'ACCOUNTANT' | 'MANAGER';
}

export interface Invoice {
  id: number;
  invoiceNumber: string;
  clientId?: number;
  supplierId?: number;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: 'PAID' | 'PENDING' | 'OVERDUE';
  type: 'RECEIVABLE' | 'PAYABLE';
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Supplier {
  id: number;
  name: string;
  email: string;
  phone: string;
}