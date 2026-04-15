"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    // Opens the user's mail client as a fallback until a form backend is wired up.
    // To use Formspree: replace this with fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: data })
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:jack@schufreider.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="pt-12 min-h-screen flex flex-col">
      <div className="px-6 pt-10 pb-8">
        <h1 className="text-[11px] tracking-[0.2em] uppercase">Contact</h1>
      </div>

      <div className="px-6 pb-20 max-w-md">
        {submitted ? (
          <p className="text-[11px] tracking-[0.15em] uppercase text-black/50">
            Thank you — your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <label
                htmlFor="name"
                className="block text-[10px] tracking-[0.2em] uppercase mb-3 text-black/50"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border-b border-black/20 py-2 text-sm outline-none focus:border-black transition-colors duration-200 bg-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[10px] tracking-[0.2em] uppercase mb-3 text-black/50"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border-b border-black/20 py-2 text-sm outline-none focus:border-black transition-colors duration-200 bg-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[10px] tracking-[0.2em] uppercase mb-3 text-black/50"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full border-b border-black/20 py-2 text-sm outline-none focus:border-black transition-colors duration-200 bg-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="text-[10px] tracking-[0.2em] uppercase border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-200"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
