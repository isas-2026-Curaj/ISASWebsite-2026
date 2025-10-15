"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Server Action: sends contact email to the organizer.
 * Uses Resend dev sender to avoid domain verification errors.
 */
export async function sendContactEmail(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const subject = String(formData.get("subject") || "New Contact Message").trim()
  const message = String(formData.get("message") || "").trim()

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  try {
    const { error } = await resend.emails.send({
      // Use Resend's dev-safe sender to bypass domain verification in preview
      from: "CURAJ Conference <onboarding@resend.dev>",
      to: ["madhavkmar@gmail.com"],
      subject: `${subject} — From ${name}`,
      reply_to: email, // so you can reply directly to the sender
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5">
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>`,
    })

    if (error) {
      return { success: false, error: error.message || "Failed to send email." }
    }

    return { success: true }
  } catch (err: any) {
    return { success: false, error: "Email service is currently unavailable. Please try again later." }
  }
}
