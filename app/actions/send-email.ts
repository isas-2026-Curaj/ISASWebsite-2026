"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function pick(form: FormData, key: string) {
  return String(form.get(key) ?? "")
    .toString()
    .trim()
}
function nonEmpty(...vals: string[]) {
  return vals.every((v) => v && v.length > 0)
}

export async function sendContactEmail(formData: FormData) {
  const name = pick(formData, "name")
  const email = pick(formData, "email")
  const subject = pick(formData, "subject")
  const message = pick(formData, "message")

  if (!nonEmpty(name, email, subject, message)) {
    return { success: false, error: "Please fill all fields." }
  }

  try {
    await resend.emails.send({
      from: "CURaj Conference <onboarding@resend.dev>",
      to: ["madhavkmar@gmail.com"],
      reply_to: email || undefined,
      subject: `Contact: ${subject} — ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    })
    return { success: true }
  } catch (err: any) {
    console.error("[v0] sendContactEmail error:", err?.message || err)
    return { success: false, error: "Unable to send message right now." }
  }
}

export async function sendRegistrationEmail(formData: FormData) {
  const name = pick(formData, "name")
  const email = pick(formData, "email")
  const category = pick(formData, "category")
  const affiliation = pick(formData, "affiliation")
  const phone = pick(formData, "phone")
  const notes = pick(formData, "notes")

  if (!nonEmpty(name, email, category)) {
    return { success: false, error: "Name, Email, and Category are required." }
  }

  try {
    await resend.emails.send({
      from: "CURaj Conference <onboarding@resend.dev>",
      to: ["madhavkmar@gmail.com"],
      reply_to: email || undefined,
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
    return { success: true }
  } catch (err: any) {
    console.error("[v0] sendRegistrationEmail error:", err?.message || err)
    return { success: false, error: "Unable to submit registration right now." }
  }
}
