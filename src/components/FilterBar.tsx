"use client"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, List } from "lucide-react"

interface FilterBarProps {
  totalResults: number
  view: "grid" | "list"
  onViewChange: (view: "grid" | "list") => void
  onSortChange: (value: string) => void
  sortBy: string
}

export default function FilterBar({ totalResults, view, onViewChange, onSortChange, sortBy }: FilterBarProps) {
    
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between max-w-[1080px] mx-auto px-4 py-6 items-center">
      <p className="text-[#737373] font-bold text-sm">Showing all {totalResults} results</p>

      <div className="flex gap-2 items-center">
        <p className="text-[#737373] font-bold text-sm">Views:</p>
        <Button
          variant={view === "grid" ? "default" : "outline"}
          size="icon"
          className="w-[46px] h-[46px]"
          onClick={() => onViewChange("grid")}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button
          variant={view === "list" ? "default" : "outline"}
          size="icon"
          className="w-[46px] h-[46px]"
          onClick={() => onViewChange("list")}
        >
          <List className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-4">
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[141px] h-[50px] bg-[#DDDDDD] text-[#737373] font-normal">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="quantity">Availability</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-[94px] h-[50px] bg-[#23A6F0] hover:bg-[#1a94d9] text-white font-bold text-sm">
          Filter
        </Button>
      </div>
    </div>
  )
}

