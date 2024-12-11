'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const loggedstatus = () => {
    const [loggedin, setIsLoggedin] = useState(false)
  return (
    <div>
        {loggedin ? (
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          
        ) : 
        (<Button>Login / Register</Button>)}
        
        
        </div>
  )
}

export default loggedstatus