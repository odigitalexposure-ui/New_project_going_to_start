"use client";

import { useState, type FormEvent } from "react";

const fieldClassName =
  "mt-2 w-full rounded-[1.2rem] border border-line bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <span className="eyebrow">Request availability</span>
        <h2 className="mt-5 text-4xl text-foreground">Start your inquiry</h2>
        <p className="mt-4 max-w-2xl">
          Share a few details and this static demo will show the final inquiry
          experience. For production, this form can be connected to email,
          Supabase, or your preferred CRM.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Ariana Smith" />
        <Field
          label="Email address"
          name="email"
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Phone number"
          name="phone"
          placeholder="+1 (555) 123-4567"
        />
        <Field
          label="Interest"
          name="interest"
          placeholder="Vacation stay, long stay, owner partnership"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Arrival" name="arrivalDate" type="date" />
        <Field label="Departure" name="departureDate" type="date" />
        <Field label="Guests" name="guests" type="number" min={1} placeholder="2" />
      </div>

      <label className="block text-sm font-medium text-foreground">
        Message
        <textarea
          name="message"
          rows={6}
          placeholder="Tell us about your destination, style, and what would make the stay feel right."
          className={fieldClassName}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="button-primary">
          Send inquiry
        </button>
        <p className="text-sm">
          Static demo form for UI presentation and conversion flow.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-[1.2rem] border border-brand/20 bg-brand-soft px-4 py-3 text-sm text-brand-strong">
          Thanks for exploring the inquiry flow. This static version is ready to
          connect to a real form backend whenever you want.
        </div>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  min?: number;
};

function Field({ label, name, type = "text", placeholder, min }: FieldProps) {
  return (
    <label className="block text-sm font-medium text-foreground">
      {label}
      <input
        type={type}
        name={name}
        min={min}
        placeholder={placeholder}
        className={fieldClassName}
      />
    </label>
  );
}
