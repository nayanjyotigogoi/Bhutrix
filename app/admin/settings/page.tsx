"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const { toast } = useToast()
  const [isSaving, setIsSaving] = useState(false)

  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Bhutrix",
    siteDescription: "IT Solutions & Services",
    contactEmail: "contact@bhutrix.com",
    contactPhone: "+91 98765 43210",
    address: "123 Tech Park, GS Road, Guwahati, Assam 781005, India",
  })

  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "Bhutrix - IT Solutions & Services",
    metaDescription:
      "Custom website development, CRM solutions, SAP consulting, AI business automation, and creative design services",
    ogImage: "/placeholder.svg?height=600&width=1200",
    googleAnalyticsId: "",
    enableSitemap: true,
  })

  const [socialSettings, setSocialSettings] = useState({
    facebook: "https://facebook.com/bhutrix",
    twitter: "https://twitter.com/bhutrix",
    linkedin: "https://linkedin.com/company/bhutrix",
    instagram: "https://instagram.com/bhutrix",
    youtube: "",
  })

  const handleGeneralChange = (field: string, value: string) => {
    setGeneralSettings((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSeoChange = (field: string, value: string | boolean) => {
    setSeoSettings((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSocialChange = (field: string, value: string) => {
    setSocialSettings((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    setIsSaving(true)

    // Simulate saving
    setTimeout(() => {
      setIsSaving(false)
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your website settings and preferences.</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage basic information about your website.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={generalSettings.siteName}
                  onChange={(e) => handleGeneralChange("siteName", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={generalSettings.siteDescription}
                  onChange={(e) => handleGeneralChange("siteDescription", e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={generalSettings.contactEmail}
                  onChange={(e) => handleGeneralChange("contactEmail", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input
                  id="contactPhone"
                  value={generalSettings.contactPhone}
                  onChange={(e) => handleGeneralChange("contactPhone", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={generalSettings.address}
                  onChange={(e) => handleGeneralChange("address", e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your website for search engines.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={seoSettings.metaTitle}
                  onChange={(e) => handleSeoChange("metaTitle", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={seoSettings.metaDescription}
                  onChange={(e) => handleSeoChange("metaDescription", e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="ogImage">OG Image URL</Label>
                <Input
                  id="ogImage"
                  value={seoSettings.ogImage}
                  onChange={(e) => handleSeoChange("ogImage", e.target.value)}
                />
                {seoSettings.ogImage && (
                  <div className="mt-2">
                    <img
                      src={seoSettings.ogImage || "/placeholder.svg"}
                      alt="OG Image Preview"
                      className="max-h-40 rounded-md object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                <Input
                  id="googleAnalyticsId"
                  value={seoSettings.googleAnalyticsId}
                  onChange={(e) => handleSeoChange("googleAnalyticsId", e.target.value)}
                  placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="enableSitemap"
                  checked={seoSettings.enableSitemap}
                  onCheckedChange={(checked) => handleSeoChange("enableSitemap", checked)}
                />
                <Label htmlFor="enableSitemap">Enable Sitemap</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Settings</CardTitle>
              <CardDescription>Connect your website to social media platforms.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="facebook">Facebook URL</Label>
                <Input
                  id="facebook"
                  value={socialSettings.facebook}
                  onChange={(e) => handleSocialChange("facebook", e.target.value)}
                  placeholder="https://facebook.com/yourpage"
                />
              </div>

              <div>
                <Label htmlFor="twitter">Twitter URL</Label>
                <Input
                  id="twitter"
                  value={socialSettings.twitter}
                  onChange={(e) => handleSocialChange("twitter", e.target.value)}
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>

              <div>
                <Label htmlFor="linkedin">LinkedIn URL</Label>
                <Input
                  id="linkedin"
                  value={socialSettings.linkedin}
                  onChange={(e) => handleSocialChange("linkedin", e.target.value)}
                  placeholder="https://linkedin.com/company/yourcompany"
                />
              </div>

              <div>
                <Label htmlFor="instagram">Instagram URL</Label>
                <Input
                  id="instagram"
                  value={socialSettings.instagram}
                  onChange={(e) => handleSocialChange("instagram", e.target.value)}
                  placeholder="https://instagram.com/yourhandle"
                />
              </div>

              <div>
                <Label htmlFor="youtube">YouTube URL</Label>
                <Input
                  id="youtube"
                  value={socialSettings.youtube}
                  onChange={(e) => handleSocialChange("youtube", e.target.value)}
                  placeholder="https://youtube.com/c/yourchannel"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
