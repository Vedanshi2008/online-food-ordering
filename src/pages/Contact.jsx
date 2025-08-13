import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 800))
    setStatus('sent')
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full border rounded-lg p-2" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border rounded-lg p-2" required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows="4" className="w-full border rounded-lg p-2" required />
        <button disabled={status==='sending'} className="px-4 py-2 bg-rose-600 text-white rounded-lg">
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
        {status === 'sent' && <p className="text-green-600">Message sent!</p>}
      </form>
    </section>
  )
}