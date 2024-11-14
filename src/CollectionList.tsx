import React from 'react'
import TabsList from './TabsList.tsx'
import CollectionCards from './CollectionCards.tsx'

export default function CollectionList() {
    
  return (
    <div className='w-[100%] max-w-[1563px] bg-[#EFF0F1] rounded-[26px] shadow-[0px_76px_27px_0px_rgba(6,27,82,0.1)] p-[62px]'>
        <h2 className="collection-list__title font-[Merriweather] font-[700] text-[32px] mb-[28px]">Popular Collections</h2>
        <TabsList />
        <CollectionCards />
    </div>
  )
}