import { defineField, defineType } from "sanity"

export const Product = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: 'title',
                maxLength: 200
            },
            validation: Rule => Rule.required().error("this feild is required")
        }),
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: "category",
            title: "Category",
            type: "array",
            of: [{ type: "reference",
                to:[{type:"category"}]
             }],
        },
        {
            name: "discountPercentage",
            title: "Discount Percentage",
            type: 'number',
        },
        {
            name: "isNew",
            type: 'boolean',
            title: "New",
        },
        {
            name: "colors",
            title: "Colors",
            type: 'array',
            of: [
                { type: 'string' }
            ]
        },
        {
            name: "sizes",
            title: "Sizes",
            type: 'array',
            of: [
                { type: 'string' }
            ]
        },
        {
            name: "quantity",
            type: "number",
            title: "Quantity"
        }


    ],
})