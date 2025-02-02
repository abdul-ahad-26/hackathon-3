import { Slug } from "sanity"

export interface Product {
    _id:string,
    title:string,
    slug:Slug,
    description:string,
    image_url:string,
    category:string,
    price:number,
    quantity:number,
    discountPercentage:number,
    isNew:boolean,
    colors:string[],
    sizes:string[]
}
