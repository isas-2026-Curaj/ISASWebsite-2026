export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const form = (formData.get("form") || "registration").toString()
    const name = (formData.get("name") || "").toString()
    const email = (formData.get("email") || "").toString()
    const phone = (formData.get("phone") || "").toString()
    const category = (formData.get("category") || "").toString()
    const subjectIn = (formData.get("subject") || "").toString()
    const message = (formData.get("message") || "").toString()

    // Build a simple HTML summary for the email body
    const subject =
      subjectIn ||
      (form === "contact"
        ? `Contact form message from ${name || "Visitor"}`
        : `New Registration from ${name || "Participant"}`)

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;">
        <h2 style="margin:0 0 8px;">${form === "contact" ? "Contact Form" : "Registration Form"}</h2>
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${category ? `<p><strong>Category:</strong> ${category}</p>` : ""}
        ${message ? `<p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}
        <p style="margin-top:16px;color:#666;">This email was sent from your CURAJ Conference website.</p>
      </div>
    `

    // Optional image/file attachment
    const maybeFile = formData.get("attachment")
    const attachments: Array<{ filename: string; content: string }> = []

    if (maybeFile && typeof maybeFile !== "string") {
      const file = maybeFile as File
      // Limit to ~6MB for safety
      if (file.size > 6 * 1024 * 1024) {
        return new Response(JSON.stringify({ ok: false, error: "Attachment too large. Max 6MB." }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        })
      }
      const buf = Buffer.from(await file.arrayBuffer())
      const base64 = buf.toString("base64")
      attachments.push({ filename: file.name || "attachment", content: base64 })
    }

    // Send via Resend using the dev-safe sender to avoid domain verification issues
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CURaj Conference <onboarding@resend.dev>",
        to: ["madhavkmar@gmail.com"],
        subject,
        html,
        attachments: attachments.length ? attachments : undefined,
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      console.error("[v0] Resend error:", res.status, body)
      return new Response(JSON.stringify({ ok: false, error: "Failed to send email", detail: body }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err: any) {
    console.error("[v0] /api/send-email exception:", err?.message)
    return new Response(JSON.stringify({ ok: false, error: "Unexpected server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
