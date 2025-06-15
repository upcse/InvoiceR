import React, { useState } from 'react';
import { Download, Eye, Save, Plus, Trash2 } from 'lucide-react';
import Header from '../components/Header';
import { generatePDF } from '../utils/pdfGenerator';
import { encryptInvoiceData } from '../utils/encryption';
import { trackUserActivity } from '../utils/analytics';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface InvoiceData {
  invoiceNumber: string;
  date: string;
  dueDate: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  notes: string;
}

const InvoiceGenerator: React.FC = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    invoiceNumber: `INV-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    dueDate: '',
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    items: [{ id: '1', description: '', quantity: 1, rate: 0, amount: 0 }],
    subtotal: 0,
    tax: 18, // Default GST rate
    total: 0,
    notes: ''
  });

  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    };
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const removeItem = (id: string) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
    calculateTotals();
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          if (field === 'quantity' || field === 'rate') {
            updatedItem.amount = updatedItem.quantity * updatedItem.rate;
          }
          return updatedItem;
        }
        return item;
      })
    }));
    calculateTotals();
  };

  const calculateTotals = () => {
    setTimeout(() => {
      setInvoiceData(prev => {
        const subtotal = prev.items.reduce((sum, item) => sum + item.amount, 0);
        const taxAmount = (subtotal * prev.tax) / 100;
        const total = subtotal + taxAmount;
        
        return {
          ...prev,
          subtotal,
          total
        };
      });
    }, 0);
  };

  const saveInvoice = () => {
    try {
      const encryptedData = encryptInvoiceData(invoiceData);
      const existingInvoices = JSON.parse(localStorage.getItem('invoicer-invoices') || '[]');
      existingInvoices.push({
        ...invoiceData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('invoicer-invoices', JSON.stringify(existingInvoices));
      trackUserActivity('invoice_saved', { invoiceNumber: invoiceData.invoiceNumber });
      alert('Invoice saved successfully!');
    } catch (error) {
      console.error('Error saving invoice:', error);
      alert('Error saving invoice. Please try again.');
    }
  };

  const downloadPDF = async () => {
    try {
      await generatePDF(invoiceData);
      trackUserActivity('invoice_downloaded', { invoiceNumber: invoiceData.invoiceNumber });
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Invoice Generator</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Eye className="h-4 w-4" />
              <span>{isPreviewMode ? 'Edit' : 'Preview'}</span>
            </button>
            <button
              onClick={saveInvoice}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Save</span>
            </button>
            <button
              onClick={downloadPDF}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Invoice Details</h2>
            
            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Invoice Number</label>
                <input
                  type="text"
                  value={invoiceData.invoiceNumber}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, invoiceNumber: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={invoiceData.date}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Client Info */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Client Information</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Client Name"
                  value={invoiceData.clientName}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, clientName: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Client Email"
                  value={invoiceData.clientEmail}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, clientEmail: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Client Address"
                  value={invoiceData.clientAddress}
                  onChange={(e) => setInvoiceData(prev => ({ ...prev, clientAddress: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Items */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Items</h3>
                <button
                  onClick={addItem}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg flex items-center space-x-1 text-sm transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Item</span>
                </button>
              </div>
              
              <div className="space-y-3">
                {invoiceData.items.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-2">
                    <input
                      type="text"
                      placeholder="Description"
                      value={item.description}
                      onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                      className="col-span-5 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Qty"
                      value={item.quantity}
                      onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                      className="col-span-2 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Rate"
                      value={item.rate}
                      onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                      className="col-span-2 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <div className="col-span-2 px-2 py-1 bg-gray-600 rounded text-white text-sm text-center">
                      ₹{item.amount.toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="col-span-1 text-red-400 hover:text-red-300 flex items-center justify-center"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="border-t border-gray-700 pt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{invoiceData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tax (GST):</span>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={invoiceData.tax}
                      onChange={(e) => {
                        setInvoiceData(prev => ({ ...prev, tax: parseFloat(e.target.value) || 0 }));
                        calculateTotals();
                      }}
                      className="w-16 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <span>%</span>
                    <span>₹{((invoiceData.subtotal * invoiceData.tax) / 100).toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t border-gray-700 pt-2">
                  <span>Total:</span>
                  <span>₹{invoiceData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white text-gray-900 rounded-xl p-6 min-h-[800px]">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-blue-600">INVOICE</h1>
              <p className="text-gray-600">#{invoiceData.invoiceNumber}</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2">From:</h3>
                <div className="text-sm text-gray-600">
                  <p>Your Company Name</p>
                  <p>Your Address</p>
                  <p>City, State ZIP</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">To:</h3>
                <div className="text-sm text-gray-600">
                  <p>{invoiceData.clientName || 'Client Name'}</p>
                  <p>{invoiceData.clientEmail || 'client@email.com'}</p>
                  <div className="whitespace-pre-line">
                    {invoiceData.clientAddress || 'Client Address'}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-sm"><span className="font-semibold">Invoice Date:</span> {invoiceData.date}</p>
              </div>
              <div>
                <p className="text-sm"><span className="font-semibold">Due Date:</span> {invoiceData.dueDate || 'Not specified'}</p>
              </div>
            </div>

            <table className="w-full mb-8 border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2">Description</th>
                  <th className="text-center py-2">Qty</th>
                  <th className="text-right py-2">Rate</th>
                  <th className="text-right py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="py-2">{item.description || 'Item description'}</td>
                    <td className="text-center py-2">{item.quantity}</td>
                    <td className="text-right py-2">₹{item.rate.toFixed(2)}</td>
                    <td className="text-right py-2">₹{item.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end">
              <div className="w-64">
                <div className="flex justify-between py-1">
                  <span>Subtotal:</span>
                  <span>₹{invoiceData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Tax ({invoiceData.tax}%):</span>
                  <span>₹{((invoiceData.subtotal * invoiceData.tax) / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 font-bold text-lg border-t border-gray-300">
                  <span>Total:</span>
                  <span>₹{invoiceData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {invoiceData.notes && (
              <div className="mt-8">
                <h3 className="font-semibold mb-2">Notes:</h3>
                <p className="text-sm text-gray-600">{invoiceData.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;