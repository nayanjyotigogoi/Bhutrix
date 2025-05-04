'use client'

import { useTranslation } from "@/components/language-provider"

interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const { t } = useTranslation()

  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
      {description && <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}
