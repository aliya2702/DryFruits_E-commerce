import React, { useState } from "react";
import { STORE_INFO } from "../../data/homeData";
import { SectionTitle, Card, Button } from "../../components/ui";

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", msg: "" });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Details */}
          <div className="space-y-6">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest block">
              ✉️ Contact Us
            </span>
            <SectionTitle
              title="Get in Touch"
              subtitle="Have inquiries about wholesale orders, custom wedding gift trays, or specific snack items? Send us a message or contact directly via phone."
              align="left"
              className="mb-6 max-w-none"
            />

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3 text-stone-300">
                <span className="text-xl">📞</span>
                <div>
                  <h4 className="text-xs text-stone-500 uppercase font-semibold">Call Directly</h4>
                  <p className="text-sm font-bold text-stone-200">{STORE_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-stone-300">
                <span className="text-xl">✉️</span>
                <div>
                  <h4 className="text-xs text-stone-500 uppercase font-semibold">Send Email</h4>
                  <p className="text-sm font-bold text-stone-200">{STORE_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <Card padding="lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                <span className="text-5xl">✅</span>
                <h3 className="text-lg font-bold text-stone-200">Message Sent!</h3>
                <p className="text-xs text-stone-500">Thank you. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-855 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-500/50 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-855 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-500/50 transition-colors"
                    placeholder="name@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-2">Message</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.msg}
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-855 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  fullWidth
                  rightIcon={<span className="text-lg leading-none">✉️</span>}
                >
                  Send Message
                </Button>
              </form>
            )}
          </Card>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
