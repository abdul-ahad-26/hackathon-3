// schemas/category.js
export const Category = {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
    ],
};