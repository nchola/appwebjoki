'use client';
import React, { useState } from 'react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const initialState = {
  firstname: '',
  lastname: '',
  company: '',
  email: '',
  phone_number: '',
  your_message: '',
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Gagal mengirim pesan.');
      setSuccess(true);
      setForm(initialState);
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 transition-all">
      <div className="relative bg-black rounded-2xl shadow-xl w-full max-w-4xl mx-4 md:mx-0 p-8 md:p-16 overflow-y-auto max-h-[90vh] border border-white/10">
        <button
          className="absolute top-4 right-4 bg-white/10 text-white rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2 hover:bg-white/20 border border-white/20"
          onClick={onClose}
          aria-label="Tutup"
        >
          Tutup <span aria-hidden="true">&times;</span>
        </button>
        {success ? (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Terima kasih!<br />Kami akan segera menghubungi Anda. 👍</h2>
            <span className="text-center text-white/80">Sementara itu, terhubung dengan kami di <a href="https://www.linkedin.com/company/juicebox-co-id/" target="_blank" className="underline text-purple-400">LinkedIn</a></span>
          </div>
        ) : (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold mb-4 text-white">Siap untuk membawa proyek anda ke level lebih tinggi?</h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 text-white">Nama Depan <span className="text-red-400">*</span></label>
                  <input type="text" name="firstname" value={form.firstname} onChange={handleChange} required className="form-input w-full border-b border-white/20 bg-black text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 text-white">Nama Belakang <span className="text-red-400">*</span></label>
                  <input type="text" name="lastname" value={form.lastname} onChange={handleChange} required className="form-input w-full border-b border-white/20 bg-black text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Perusahaan <span className="text-red-400">*</span></label>
                <input type="text" name="company" value={form.company} onChange={handleChange} required className="form-input w-full border-b border-white/20 bg-black text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Email <span className="text-red-400">*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-input w-full border-b border-white/20 bg-black text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
                <input type="tel" name="phone_number" value={form.phone_number} onChange={handleChange} className="form-input w-full border-b border-white/20 bg-black text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Pesan <span className="text-red-400">*</span></label>
                <textarea name="your_message" value={form.your_message} onChange={handleChange} required className="form-input w-full border-b border-white/20 bg-black text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400 min-h-[80px]" />
              </div>
              <button type="submit" className="mt-4 flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-full font-semibold shadow-lg hover:bg-purple-600 transition disabled:opacity-60" disabled={loading}>
                {loading ? 'Mengirim...' : (<><span className="inline-block">Kirim</span><span aria-hidden="true">↗</span></>)}
              </button>
              {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
              <span className="text-xs text-white/40 mt-2">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" className="underline text-purple-400">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" className="underline text-purple-400">Terms of Service</a> apply.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
} 