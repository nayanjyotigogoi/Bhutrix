"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save, Trash2, Plus, ImageIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock function to get content - in a real app, this would fetch from an API
const getContent = (section: string, subsection: string) => {
  // This is just a mock implementation
  return {
    title: `${subsection.charAt(0).toUpperCase() + subsection.slice(1).replace(/-/g, " ")}`,
    description: "This is a sample description for this section. Edit it to update the content on your website.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "/placeholder.svg?height=400&width=600",
    items: [
      { id: "1", title: "Item 1", description: "Description for item 1" },
      { id: "2", title: "Item 2", description: "Description for item 2" },
      { id: "3", title: "Item 3", description: "Description for item 3" },
    ],
  }
}

// Mock function to save content - in a real app, this would send to an API
const saveContent = (section: string, subsection: string, content: any) => {
  // This is just a mock implementation
  console.log("Saving content:", { section, subsection, content })
  return true
}

export default function ContentEditPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()

  const section = searchParams.get("section") || ""
  const subsection = searchParams.get("subsection") || ""

  const [content, setContent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (section && subsection) {
      // Fetch content data
      const data = getContent(section, subsection)
      setContent(data)
      setIsLoading(false)
    } else {
      // Invalid parameters, redirect back
      router.push("/admin/content")
    }
  }, [section, subsection, router])

  const handleInputChange = (field: string, value: string) => {
    setContent((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleItemChange = (index: number, field: string, value: string) => {
    const updatedItems = [...content.items]
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    }

    setContent((prev) => ({
      ...prev,
      items: updatedItems,
    }))
  }

  const handleAddItem = () => {
    const newItem = {
      id: Date.now().toString(),
      title: "New Item",
      description: "Description for new item",
    }

    setContent((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }))
  }

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...content.items]
    updatedItems.splice(index, 1)

    setContent((prev) => ({
      ...prev,
      items: updatedItems,
    }))
  }

  const handleSave = () => {
    setIsSaving(true)

    // Save content
    const success = saveContent(section, subsection, content)

    if (success) {
      toast({
        title: "Content saved",
        description: "Your changes have been saved successfully.",
      })
    } else {
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      })
    }

    setIsSaving(false)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => router.push("/admin/content")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Content Management
        </Button>
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit {content.title}</CardTitle>
          <CardDescription>
            Update the content for the {subsection.replace(/-/g, " ")} section of your {section.replace(/-/g, " ")}{" "}
            page.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={content.title} onChange={(e) => handleInputChange("title", e.target.value)} />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={content.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                rows={6}
              />
            </div>

            <div>
              <Label htmlFor="image">Image URL</Label>
              <div className="flex gap-2">
                <Input id="image" value={content.image} onChange={(e) => handleInputChange("image", e.target.value)} />
                <Button variant="outline" size="icon">
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </div>
              {content.image && (
                <div className="mt-2">
                  <img
                    src={content.image || "/placeholder.svg"}
                    alt="Preview"
                    className="max-h-40 rounded-md object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {content.items && content.items.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Items</Label>
                <Button variant="outline" size="sm" onClick={handleAddItem}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Item
                </Button>
              </div>

              {content.items.map((item: any, index: number) => (
                <Card key={item.id}>
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Item {index + 1}</CardTitle>
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(index)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-4">
                    <div>
                      <Label htmlFor={`item-${index}-title`}>Title</Label>
                      <Input
                        id={`item-${index}-title`}
                        value={item.title}
                        onChange={(e) => handleItemChange(index, "title", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`item-${index}-description`}>Description</Label>
                      <Textarea
                        id={`item-${index}-description`}
                        value={item.description}
                        onChange={(e) => handleItemChange(index, "description", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/admin/content")}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
