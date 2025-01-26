import { defineType } from "sanity"

export const product = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
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
            name: 'image_url',
            title: 'Image',
            type: 'string',
        },
        {
            name: "category",
            title: "Category",
            type: 'string',
            options: {
                list: [
                    { title: 'T-Shirt', value: 'tshirt' },
                    { title: 'Short', value: 'short' },
                    { title: 'Jeans', value: 'jeans' },
                    { title: 'Hoddie', value: 'hoodie' },
                    { title: 'Shirt', value: 'shirt' },
                ]
            }
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
        },
    ],
})