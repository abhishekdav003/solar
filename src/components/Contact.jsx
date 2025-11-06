import { useState } from 'react';
import { MapPin, Phone, CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace this with your Google Form `formResponse` link
    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSchExk8sEuc9rBU_7owJQ2gSmcDXl9_dnlghbwxH7joJT6rrg/formResponse';

    // Replace entry.xxxxxx with your actual Google Form field entry IDs
    const formBody = new URLSearchParams();
    formBody.append('entry.440727497', formData.name);
    formBody.append('entry.430770871', formData.email);
    formBody.append('entry.95910529', formData.phone);
    formBody.append('entry.939968545', formData.address);
    formBody.append('entry.751025951', formData.message);

    try {
      await fetch(formUrl, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors', // prevents redirection to Google page
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Contact Us Today</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Akash Power Solutions</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600 text-sm">Labour Chowk, Ram Nagar, Roorkee</p>
                    <p className="text-gray-600 text-sm">Distt. Haridwar - 247667</p>

                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600 text-sm">+91 9917010055</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.5!2d77.8949!3d29.8543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzE1LjUiTiA3N8KwNTMnNDEuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Akash Power Solutions Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            {submitted && (
              <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <p className="font-semibold text-green-900">Response recorded successfully!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 font-semibold flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}