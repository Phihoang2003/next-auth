"use client"
import React from 'react'
import { Button } from './button'
import { signOut } from 'next-auth/react'

const BtnLoggout = () => {
  return (
    <div>
        <Button variant="destructive" onClick={()=>signOut({
            redirect:true,
            callbackUrl:`${window.location.origin}/sign-in`
        })}>Sign Out</Button>
    </div>
  )
}

export default BtnLoggout