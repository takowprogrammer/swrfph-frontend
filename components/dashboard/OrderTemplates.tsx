'use client'

import { useState } from 'react'
import { OrderTemplate } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Package, Clock, Trash2, Play } from 'lucide-react'
import { toast } from 'sonner'

interface OrderTemplatesProps {
    templates: OrderTemplate[]
    onTemplateSelect: (template: OrderTemplate) => void
    onTemplateDelete: (templateId: string) => void
    onCreateTemplate: () => void
    className?: string
}

export function OrderTemplates({
    templates,
    onTemplateSelect,
    onTemplateDelete,
    onCreateTemplate,
    className
}: OrderTemplatesProps) {
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

    const handleTemplateSelect = (template: OrderTemplate) => {
        setSelectedTemplate(template.id)
        onTemplateSelect(template)
    }

    const handleTemplateDelete = (templateId: string, e: React.MouseEvent) => {
        e.stopPropagation()
        if (confirm('Are you sure you want to delete this template?')) {
            onTemplateDelete(templateId)
            toast.success('Template deleted successfully')
        }
    }

    if (!templates || templates.length === 0) {
        return (
            <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className || ''}`}>
                <div className="text-center">
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Order Templates</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Create templates to quickly reorder frequently used medicine combinations
                    </p>
                    <Button onClick={onCreateTemplate} className="bg-green-600 hover:bg-green-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Template
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className || ''}`}>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Order Templates</h3>
                    <p className="text-sm text-gray-600">Quick reorder your frequent medicine combinations</p>
                </div>
                <Button onClick={onCreateTemplate} size="sm" className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Template
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {templates.map((template) => (
                    <Card
                        key={template.id}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-md ${selectedTemplate === template.id ? 'ring-2 ring-green-500' : ''
                            }`}
                        onClick={() => handleTemplateSelect(template)}
                    >
                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <CardTitle className="text-base">{template.name}</CardTitle>
                                    {template.description && (
                                        <CardDescription className="text-sm mt-1">
                                            {template.description}
                                        </CardDescription>
                                    )}
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={(e) => handleTemplateDelete(template.id, e)}
                                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <Package className="h-4 w-4 mr-2" />
                                    {template.items.length} medicines
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Clock className="h-4 w-4 mr-2" />
                                    Created {new Date(template.createdAt).toLocaleDateString()}
                                </div>
                                <div className="pt-2">
                                    <Button
                                        size="sm"
                                        className="w-full bg-green-600 hover:bg-green-700"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleTemplateSelect(template)
                                        }}
                                    >
                                        <Play className="h-4 w-4 mr-2" />
                                        Use Template
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

