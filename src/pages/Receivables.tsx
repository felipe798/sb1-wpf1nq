import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Invoice } from '../types';
import { InvoiceList } from '../components/InvoiceList';
import { InvoiceForm } from '../components/InvoiceForm';

// Mock data - replace with API calls
const mockInvoices: Invoice[] = [
  {
    id: 1,
    invoiceNumber: 'INV-001',
    clientId: 1,
    issueDate: '2024-03-01',
    dueDate: '2024-03-31',
    amount: 1500,
    status: 'PENDING',
    type: 'RECEIVABLE',
  },
  {
    id: 2,
    invoiceNumber: 'INV-002',
    clientId: 2,
    issueDate: '2024-02-15',
    dueDate: '2024-03-15',
    amount: 2300,
    status: 'PAID',
    type: 'RECEIVABLE',
  },
];

export const Receivables = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleCreateInvoice = (data: Partial<Invoice>) => {
    console.log('Create invoice:', data);
    setShowForm(false);
  };

  const handleViewDetails = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Accounts Receivable
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your customer invoices and track payments
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            onClick={() => {
              setSelectedInvoice(null);
              setShowForm(true);
            }}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            New Invoice
          </button>
        </div>
      </div>

      {showForm ? (
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
              {selectedInvoice ? 'Edit Invoice' : 'Create New Invoice'}
            </h3>
            <InvoiceForm
              onSubmit={handleCreateInvoice}
              initialData={selectedInvoice || undefined}
              type="RECEIVABLE"
            />
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-sm rounded-lg">
          <InvoiceList
            invoices={mockInvoices}
            onViewDetails={handleViewDetails}
          />
        </div>
      )}
    </div>
  );
};