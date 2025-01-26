import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Breadcrum = () => {
    return (
        <div>

            <div className='bg-[#FAFAFA]'>
                <div className='max-w-[1080px]  mx-auto px-4  py-8 flex justify-between'>
                    <p className='font-bold text-2xl text-[252B42]'>Shop</p>

                    <Breadcrumb  >
                        <BreadcrumbList >
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='font-bold text-sm text-[#252B42]'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className='font-bold text-sm text-[#BDBDBD]'>Shop</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}

export default Breadcrum
