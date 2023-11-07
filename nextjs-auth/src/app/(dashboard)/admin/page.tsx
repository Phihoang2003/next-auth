import { authOptions } from '@/lib/auth'

import { getServerSession } from 'next-auth'
import React from 'react'

const Admin =async() => {
  const session=await getServerSession(authOptions);
  console.log(session);
  
  return (
    <div>
        {session?.user?(
    <div>Welcome to {session?.user.username}</div>):(<div>Please to sign in to see Admin Page</div>)}
    </div>
  )
}

export default Admin