import React from 'react';
import { useForm } from 'react-hook-form';
import { Invoice } from '../types';

interface InvoiceFormProps {
  onSubmit: (data: Partial<Invoice>) => void;
  initialData?: Partial<Invoice>;
  type: 'RECEIVABLE' | 'PAYABLE';
}

export const InvoiceForm: React.FC<InvoiceFormProps> = ({
  onSubmit,
  initialData,
  type,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Partial<Invoice>>({
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700">
          Invoice Number
        </label>
        <input
          type="text"
          id="invoiceNumber"
          {...register('invoiceNumber', { required: 'Invoice number is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.invoiceNumber && (
          <p className="mt-2 text-sm text-red-600">{errors.invoiceNumber.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700">
            Issue Date
          </label>
          <input
            type="date"
            id="issueDate"
            {...register('issueDate', { required: 'Issue date is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.issueDate && (
            <p className="mt-2 text-sm text-red-600">{errors.issueDate.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            {...register('dueDate', { required: 'Due date is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.dueDate && (
            <p className="mt-2 text-sm text-red-600">{errors.dueDate.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            id="amount"
            {...register('amount', {
              required: 'Amount is required',
              min: { value: 0, message: 'Amount must be positive' },
            })}
            className="mt-1 block w-full pl-7 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="0.00"
            step="0.01"
          />
        </div>
        {errors.amount && (
          <p className="mt-2 text-sm text-red-600">{errors.amount.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          id="status"
          {...register('status', { required: 'Status is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="PENDING">Pending</option>
          <option value="PAID">Paid</option>
          <option value="OVERDUE">Overdue</option>
        </select>
        {errors.status && (
          <p className="mt-2 text-sm text-red-600">{errors.status.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {initialData ? 'Update Invoice' : 'Create Invoice'}
        </button>
      </div>
    </form>
  );
};