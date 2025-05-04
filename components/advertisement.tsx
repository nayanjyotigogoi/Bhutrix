"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "@/components/language-provider"
import { motion, AnimatePresence } from "framer-motion"

interface Ad {
  id: string
  type: "image" | "video"
  content: string
  link: string
  location: "hero" | "inline" | "sidebar"
  page?: string
  title: string
}

interface AdvertisementProps {
  ad: Ad
}

export function Advertisement({ ad }: AdvertisementProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const { toast } = useToast()
  const { t } = useTranslation()
  const adRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | null>(null)

  // Measure the height of the ad when it first renders
  useEffect(() => {
    if (adRef.current && isVisible) {
      setHeight(adRef.current.offsetHeight)
    }
  }, [ad.id, isVisible])

  // Reset visibility when ad changes
  useEffect(() => {
    setIsVisible(true)
  }, [ad.id])

  const handleClose = () => {
    setIsVisible(false)
    toast({
      title: t("ads.dismissed") || "Advertisement dismissed",
      description: t("ads.dismissed_message") || "You can restore ads in settings",
      action: (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(true)}
          className="hover:bg-primary hover:text-primary-foreground"
        >
          {t("ads.restore") || "Restore"}
        </Button>
      ),
    })
  }

  return (
    <div
      className={`relative ${ad.location === "sidebar" ? "min-h-[400px]" : "min-h-[200px]"} transition-all duration-300`}
      style={{ height: isVisible ? "auto" : height ? `${height}px` : "auto" }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={adRef}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full"
          >
            <Card className="relative overflow-hidden h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background transition-colors"
                onClick={handleClose}
                aria-label="Close advertisement"
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="absolute top-2 left-2 z-10 bg-background/80 px-2 py-1 text-xs rounded">Ad</div>

              <CardContent className="p-0 h-full">
                <a
                  href={ad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setHasInteracted(true)}
                  className="block h-full"
                  aria-label={`Advertisement: ${ad.title}`}
                >
                  {ad.type === "image" ? (
                    <img
                      src={ad.content || "/placeholder.svg"}
                      alt={ad.title}
                      className={`w-full ${ad.location === "sidebar" ? "h-[400px]" : "h-[200px]"} object-cover`}
                    />
                  ) : (
                    <video
                      src={ad.content}
                      controls={hasInteracted}
                      muted={!hasInteracted}
                      autoPlay={!hasInteracted}
                      loop={!hasInteracted}
                      onClick={() => setHasInteracted(true)}
                      className={`w-full ${ad.location === "sidebar" ? "h-[400px]" : "h-[200px]"} object-cover`}
                    />
                  )}

                  <div className="p-4">
                    <h3 className="font-medium">{ad.title}</h3>
                  </div>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {!isVisible && (
        <div className="w-full h-full flex items-center justify-center">
          <Button
            variant="ghost"
            onClick={() => setIsVisible(true)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("ads.show_again") || "Show advertisement"}
          </Button>
        </div>
      )}
    </div>
  )
}
