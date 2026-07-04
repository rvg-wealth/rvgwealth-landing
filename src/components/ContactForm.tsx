"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle, ChevronDown, Clock } from "lucide-react";
import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";
import { disclaimers } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full bg-mist border border-hairline rounded-lg px-4 py-2.5 text-ink placeholder:text-slate/60 focus:border-evergreen focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <CheckCircle className="h-12 w-12 text-evergreen" />
        <h3 className="text-h3 text-ink">Thank you - message received.</h3>
        <p className="text-body text-slate flex items-center gap-2">
          <Clock className="h-4 w-4 text-gold" />
          We respond to every enquiry within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Eyebrow tone="muted">Full Name</Eyebrow>
          <input
            className={inputClasses}
            placeholder="Julian Montgomery"
            type="text"
            name="name"
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div className="space-y-2">
          <Eyebrow tone="muted">Email Address</Eyebrow>
          <input
            className={inputClasses}
            placeholder="julian@example.com"
            type="email"
            name="email"
            required
            maxLength={200}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Eyebrow tone="muted">I&apos;m Interested In</Eyebrow>
        <div className="relative">
          <select
            className={`${inputClasses} appearance-none cursor-pointer`}
            name="interest"
            defaultValue="growth"
          >
            <option value="foundation">Foundation Stage</option>
            <option value="growth">Growth Stage</option>
            <option value="apex">Apex Stage</option>
            <option value="general">General Enquiry</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-slate" />
        </div>
      </div>
      <div className="space-y-2">
        <Eyebrow tone="muted">Message</Eyebrow>
        <textarea
          className={`${inputClasses} resize-none`}
          placeholder="How can we help you map your financial goals and build your roadmap?"
          rows={3}
          name="message"
          required
          minLength={10}
          maxLength={5000}
        ></textarea>
      </div>

      {status === "error" && (
        <p className="text-sm text-center text-red-600">{errorMsg}</p>
      )}

      <div className="flex justify-center">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request Discovery Session"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      <p className="text-xs leading-relaxed text-slate/70 text-center">
        {disclaimers.registration}
      </p>
    </form>
  );
}
