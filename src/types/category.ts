import { Slug } from "sanity";

export interface Category{
    "_id":string;
    "image_url":string;
    "title":string;
    "slug":Slug;
    "description":string;
}