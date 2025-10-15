"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactInput = {
  name: string
  email: string
  subject: string
  message: string
}

type RegistrationInput = {
  name: string
  email: string
  category: string
  affiliation?: string
  phone?: string
  notes?: string
}

function sanitize(value: string, max = 2000) {
  return String(value ?? "")
    .slice(0, max)
    .trim()
}

export async function sendContactEmail(input: ContactInput) {
  const name = sanitize(input.name, 120)
  const email = sanitize(input.email, 200)
  const subject = sanitize(input.subject, 200)
  const message = sanitize(input.message, 4000)

  if (!name || !email || !subject || !message) {
    return { ok: false, error: "Please fill all fields." }
  }

  try {
    await resend.emails.send({
      // Using dev-safe sender avoids the 403 "domain not verified" error
      from: "CURaj Conference <onboarding@resend.dev>",
      to: ["madhavkmar@gmail.com"],
      reply_to: email,
      subject: `Contact: ${subject} — ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    })
    return { ok: true }
  } catch (err: any) {
    console.error("[v0] sendContactEmail error:", err?.message || err)
    return { ok: false, error: "Unable to send message right now." }
  }
}

export async function sendRegistrationEmail(input: RegistrationInput) {
  const name = sanitize(input.name, 120)
  const email = sanitize(input.email, 200)
  const category = sanitize(input.category, 120)
  const affiliation = sanitize(input.affiliation ?? "", 240)
  const phone = sanitize(input.phone ?? "", 40)
  const notes = sanitize(input.notes ?? "", 800)

  if (!name || !email || !category) {
    return { ok: false, error: "Name, Email, and Category are required." }
  }

  try {
    await resend.emails.send({
      from: "CURaj Conference <onboarding@resend.dev>",
      to: ["madhavkmar@gmail.com"],
      reply_to: email,
      subject: `Registration: ${name} — ${category}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Category: ${category}`,
        `Affiliation: ${affiliation}`,
        `Phone: ${phone}`,
        `Notes: ${notes}`,
      ].join("\n"),
    })
    return { ok: true }
  } catch (err: any) {
    console.error("[v0] sendRegistrationEmail error:", err?.message || err)
    return { ok: false, error: "Unable to submit registration right now." }
  }
}
