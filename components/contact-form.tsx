"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "@/components/language-provider"
import { Loader2 } from "lucide-react"
import { addContactSubmission } from "@/lib/admin/contact-submissions"

export function ContactForm() {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Store the submission in localStorage for the admin panel
      addContactSubmission(formData)

      // Show success message
      toast({
        title: t("contact.success_title"),
        description: t("contact.success_message"),
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: t("contact.error_title"),
        description: t("contact.error_message"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            {t("contact.name")}{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t("contact.name_placeholder")}
            className="focus-ring"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {t("contact.email")}{" "}
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t("contact.email_placeholder")}
            className="focus-ring"
            aria-required="true"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          {t("contact.subject")}{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder={t("contact.subject_placeholder")}
          className="focus-ring"
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {t("contact.message")}{" "}
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder={t("contact.message_placeholder")}
          className="focus-ring resize-none"
          aria-required="true"
        />
      </div>

      <Button
        type="submit"
        className="w-full focus-ring transition-all hover:shadow-md"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t("contact.sending")}
          </>
        ) : (
          t("contact.send")
        )}
      </Button>
    </form>
  )
}
