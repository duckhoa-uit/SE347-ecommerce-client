import React from 'react'
import { IMAGES } from '@assets/img'

HeaderSection.propTypes={

}

export default function HeaderSection(props) {
  const background=IMAGES.AboutUs
    return (
        <div className="flex">
         <div className="w-full bg-cover bg-center h-96" style ={{ backgroundImage: 'url(' + background + ')' } }>
          <div className="flex items-center justify-center h-full w-full bg-opacity-50">
           <div className="text-center">
            <h1 className="text-white text-2xl font-josefins font-bold tracking-widest uppercase md:text-4xl">ABOUT US</h1>
           </div>
           </div>
         </div>
        </div>
  )
}
