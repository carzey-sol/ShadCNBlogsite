import React from 'react'
import Blogcard from "@/customcomps/blogcard";
const hero = () => {
  return (
    
    <div className="grid grid-cols-2 gap-5 ">
    <Blogcard/>
    <Blogcard/>
    <Blogcard/>
    <Blogcard/>
    <Blogcard/>

    </div>
  )
}

export default hero