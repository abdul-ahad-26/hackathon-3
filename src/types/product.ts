
export interface Product {
    _id: string
    title: string
    description: string
    image_url: string
    price: number
    category: string[]
    quantity: number
    discountPercentage: number
    isNew: boolean
    colors: string[]
    sizes: string[]
    slug: {
      current: string
    }
  }
  
  