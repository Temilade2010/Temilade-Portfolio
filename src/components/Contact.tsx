import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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
          colors: ['#000000', '#3b82f6', '#10b981', '#f59e0b'],
        });
      } catch (err) {
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
      className="w-full max-w-[53rem] flex flex-col py-[50px] md:py-[68px] px-[1.5rem] md:px-[6rem] items-start"
    >
      <h2 className="text-[30px] md:text-[34px] font-bold tracking-[-0.03em] leading-[110%] text-black mb-[16px]">
        Get in touch
      </h2>

      <p className="text-[16px] font-normal tracking-[0.01em] leading-[1.6em] text-[#5a5a5a] mb-[32px] max-w-[620px]">
        I'm always open to discussing new opportunities, open-source collaborations, internships, or tech ideas.
        Feel free to write me directly at{" "}
        <a
          href="mailto:temiladeatunde@gmail.com"
          className="text-black font-semibold underline hover:text-blue-600 transition-colors"
        >
          temiladeatunde@gmail.com
        </a>{" "}
        or send a note using the form below.
      </p>

      {submitted ? (
        <div className="w-full p-8 rounded-[20px] bg-zinc-50 border border-zinc-200 text-center flex flex-col items-center gap-3 animate-fade-in-up">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
          <h3 className="text-xl font-bold text-black">Message Sent Successfully!</h3>
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
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex-1 bg-[#f2f2f2] border border-[#0000001a] rounded-[14px] px-[24px] py-[15px] text-[15px] outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all placeholder:text-zinc-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1 bg-[#f2f2f2] border border-[#0000001a] rounded-[14px] px-[24px] py-[15px] text-[15px] outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all placeholder:text-zinc-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Write your Message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#f2f2f2] border border-[#0000001a] rounded-[14px] px-[24px] py-[16px] text-[15px] outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all resize-none placeholder:text-zinc-400"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black relative overflow-hidden text-white py-[16px] px-[24px] rounded-[14px] text-[16px] font-medium hover:opacity-90 active:scale-[0.99] duration-300 transition-all w-full flex items-center justify-center gap-2 shadow-sm disabled:opacity-75"
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
