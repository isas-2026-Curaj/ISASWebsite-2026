"use client"

import type React from "react"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setMsg(null)

    try {
      const formEl = e.currentTarget
      const formData = new FormData(formEl)
      formData.set("form", "registration") // identify source form for the API

      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      })

      const json = await res.json().catch(() => ({}))
      if (res.ok && json?.ok) {
        setMsg({ type: "success", text: "Registration submitted successfully!" })
        formEl.reset()
      } else {
        setMsg({
          type: "error",
          text: json?.error || "Failed to submit. Please try again.",
        })
      }
    } catch (err) {
      setMsg({ type: "error", text: "Unexpected error. Please try later." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="hidden" name="form" value="registration" />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required placeholder="Your full name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="your@email.com" />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            name="category"
            required
            className="w-full h-10 rounded-md border bg-background px-3 text-sm"
          >
            <option value="">Select category</option>
            <option value="Student (ISAS Life Member)">Student (ISAS Life Member)</option>
            <option value="Researcher / Scientist">Researcher / Scientist</option>
            <option value="Institutional Registration (Group)">Institutional Registration (Group)</option>
            <option value="Group (Three Members) – Student Presentation">
              Group (Three Members) – Student Presentation
            </option>
          </select>
        </div>
        <div>
          <Label htmlFor="affiliation">Affiliation</Label>
          <Input id="affiliation" name="affiliation" placeholder="University / Organization" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" placeholder="+91-XXXXXXXXXX" />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Notes</Label>
        <Textarea id="message" name="message" placeholder="Any details (e.g., accommodation needs)" rows={4} />
      </div>

      <div>
        <Label htmlFor="attachment">Payment Screenshot (optional)</Label>
        <Input
          id="attachment"
          name="attachment"
          type="file"
          accept="image/*"
          className="file:mr-3 file:rounded-md file:border file:px-3 file:py-2 file:text-sm"
        />
        <p className="mt-1 text-xs text-muted-foreground">Upload your payment screenshot (max 6MB).</p>
      </div>

      {msg && (
        <div
          className={`rounded-md p-3 text-sm ${
            msg.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          {msg.text}
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? "Submitting..." : "Submit Registration"}
      </Button>
    </form>
  )
}
