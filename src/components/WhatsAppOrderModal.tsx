import React, { useState } from 'react';
import { X, Send, Phone, Upload, CheckCircle2, ShieldCheck, Clock, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicineRequired: prefilledMedicine || '',
    hasPrescription: false,
    prescriptionFile: null as File | null,
    preferredTime: 'As soon as possible (Urgent)',
    message: ''
  });

  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        prescriptionFile: e.target.files![0],
        hasPrescription: true
      }));
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName.trim() || !formData.phone.trim() || !formData.medicineRequired.trim()) {
      alert('Please fill in your Name, Mobile Number, and Required Medicine Name.');
      return;
    }

    const prescriptionText = formData.hasPrescription
      ? `Yes (${formData.prescriptionFile ? formData.prescriptionFile.name : 'Attached in WhatsApp chat'})`
      : 'No';

    const formattedMessage = `Hello ${BUSINESS_INFO.name},

*QUICK MEDICINE ORDER*
━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${formData.customerName.trim()}
📞 *Phone:* ${formData.phone.trim()}
📧 *Email:* ${formData.email.trim() || 'N/A'}
📍 *Delivery Address:* ${formData.address.trim() || 'Rajabazar / Local Pickup'}
💊 *Medicine Required:* ${formData.medicineRequired.trim()}
📋 *Prescription Upload:* ${prescriptionText}
⏰ *Preferred Delivery Time:* ${formData.preferredTime}
📝 *Notes/Message:* ${formData.message.trim() || 'None'}
━━━━━━━━━━━━━━━━━━
_Sent via Shyam Medical Official Web App_`;

    const encodedMsg = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodedMsg}`;

    setIsSuccessMessage(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSuccessMessage(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">WhatsApp Medicine Order</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Direct Express Delivery & Pharmacy Refill</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccessMessage ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Opening WhatsApp...</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
              Redirecting to Shyam Medical WhatsApp chat with your formatted order details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="mt-6 space-y-4">
            {/* Customer Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Customer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="customerName"
                  required
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 8969881695"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Email & Delivery Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Preferred Delivery Time
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="As soon as possible (Urgent)">As soon as possible (Urgent)</option>
                  <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  <option value="Store Self Pickup">Store Self Pickup (Shikshak Colony)</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                Full Delivery Address
              </label>
              <textarea
                name="address"
                rows={2}
                value={formData.address}
                onChange={handleChange}
                placeholder="House No., Street, Landmark, Rajabazar, Jehanabad..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Medicine Required */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                Medicine Required / List <span className="text-red-500">*</span>
              </label>
              <textarea
                name="medicineRequired"
                required
                rows={2}
                value={formData.medicineRequired}
                onChange={handleChange}
                placeholder="Enter medicine names, quantities or dosages (e.g., Dolo 650mg - 1 strip, Pan-40 - 2 strips)..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Upload Prescription */}
            <div className="p-4 rounded-xl border border-dashed border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Upload className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Attach Prescription Image</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Doctors prescription photo (Optional or required for Rx drugs)</p>
                  </div>
                </div>
                <label className="px-3.5 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg cursor-pointer transition shadow-sm">
                  {formData.prescriptionFile ? 'Change File' : 'Browse File'}
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
              {formData.prescriptionFile && (
                <div className="mt-2 text-xs font-medium text-emerald-700 dark:text-emerald-300 flex items-center space-x-1.5">
                  <FileText className="w-4 h-4" />
                  <span>Selected: {formData.prescriptionFile.name}</span>
                </div>
              )}
            </div>

            {/* Notes / Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                Additional Instructions / Notes
              </label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special instructions or dosage preferences..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Verified Pharmacy</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Instant Pharmacist Review</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2 transition"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="py-3 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold rounded-xl flex items-center justify-center space-x-2 transition border border-slate-200 dark:border-slate-700"
              >
                <Phone className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Call Now</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
