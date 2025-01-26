export type Product = {
    _id:string,
    title:string,
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
