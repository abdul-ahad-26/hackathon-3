import CategoryList from '@/components/CategoryList'
import { getCategories } from '@/lib/queries'
import React from 'react'

const Categories = async () => {
  const categories= await getCategories()
  console.log("categories:",categories)


  return (
    <div>
      
      <CategoryList categories={categories}/>
    </div>
  )
}

export default Categories
