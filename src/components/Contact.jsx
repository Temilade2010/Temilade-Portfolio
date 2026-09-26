import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Send, Mail, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Trigger festive celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#000000', '#3b82f6', '#10b981', '#f59e0b', '#ec4899'],
        });
      } catch {
        // ignore if blocked
      }

      // Reset form after a brief period
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 700);
  };

  return (
    <div
      id="contact-form"
      className="w-full max-w-[53rem] flex flex-col py-[40px] md:py-[55px] px-[1.5rem] md:px-[6rem] items-start"
    >
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-zinc-100 text-zinc-800 border border-zinc-200/80 backdrop-blur-md mb-3">
        <span>Get In Touch</span>
      </div>

      <h2 className="text-[28px] md:text-[36px] font-bold tracking-[-0.03em] leading-[110%] text-zinc-950 mb-[12px]">
        Let's Connect & Build
      </h2>

      <p className="text-[15px] md:text-[16px] font-normal leading-[1.6em] text-[#5a5a5a] mb-6 max-w-[620px]">
        Whether you have a project idea, open-source collaboration, or just want to chat tech, feel free to reach out.
      </p>

      {/* Two Clean Quick-Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
        <a
          href="mailto:temiladeatunde@gmail.com"
          className="group flex items-center justify-between p-4 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/70 hover:border-zinc-300 transition-all duration-300 shadow-2xs hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email</div>
              <div className="text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                temiladeatunde@gmail.com
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href="https://www.instagram.com/temi.code/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/70 hover:border-zinc-300 transition-all duration-300 shadow-2xs hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600 group-hover:scale-105 transition-transform">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Instagram</div>
              <div className="text-sm font-semibold text-zinc-900 group-hover:text-pink-600 transition-colors">
                @temi.code
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {submitted ? (
        <div className="w-full p-8 rounded-[24px] bg-white/80 backdrop-blur-xl border border-zinc-200/80 text-center flex flex-col items-center gap-3 animate-fade-in-up shadow-sm">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
          <h3 className="text-xl font-bold text-black">Message Sent!</h3>
          <p className="text-sm text-zinc-600 max-w-md">
            Thanks for reaching out! I've received your note and will get back to you promptly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 text-sm text-zinc-900 font-medium underline hover:text-black"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="grid md:flex gap-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex-1 bg-white/70 backdrop-blur-md border border-zinc-200/90 rounded-[14px] px-[22px] py-[14px] text-[15px] outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all placeholder:text-zinc-400 shadow-2xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1 bg-white/70 backdrop-blur-md border border-zinc-200/90 rounded-[14px] px-[22px] py-[14px] text-[15px] outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all placeholder:text-zinc-400 shadow-2xs"
            />
          </div>

          <textarea
            name="message"
            placeholder="Write your message..."
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/70 backdrop-blur-md border border-zinc-200/90 rounded-[14px] px-[22px] py-[15px] text-[15px] outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all resize-none placeholder:text-zinc-400 shadow-2xs"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black relative overflow-hidden text-white py-[15px] px-[24px] rounded-[14px] text-[15px] font-semibold hover:opacity-90 active:scale-[0.99] duration-300 transition-all w-full flex items-center justify-center gap-2 shadow-sm disabled:opacity-75"
          >
            {/* Doodle background texture */}
            <img
              src="/doodle.png"
              alt="Doodle"
              className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
            />
            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </span>
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
