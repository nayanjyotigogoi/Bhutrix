"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/components/language-provider"
import { useState, useEffect } from "react"

export function LanguageToggle() {
  const { language, setLanguage, t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9 opacity-0">
        <span className="sr-only">{t("language.toggle")}</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 relative focus-ring" aria-label={t("language.toggle")}>
          <Globe className="h-[1.2rem] w-[1.2rem] transition-transform hover:scale-110" />
          <span className="sr-only">{t("language.toggle")}</span>
          <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
            {language === "en" ? "EN" : "HI"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`${language === "en" ? "bg-accent" : ""} cursor-pointer transition-colors focus-ring rounded-sm`}
          aria-selected={language === "en"}
        >
          <span className="mr-2">🇬🇧</span> English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("hi")}
          className={`${language === "hi" ? "bg-accent" : ""} cursor-pointer transition-colors focus-ring rounded-sm`}
          aria-selected={language === "hi"}
        >
          <span className="mr-2">🇮🇳</span> हिन्दी (Hindi)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
