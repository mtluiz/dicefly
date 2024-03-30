import React from 'react'
import { CreateRoom } from '../_components/create-room'

export default function Rooms() {
  return (
    <div className='flex items-center justify-center w-full p-4 border-box flex-col'>
      <div>
      <CreateRoom />
      </div>

      <div className='w-[600px] mt-12'>
        <h2>Available Rooms:</h2>
      </div>
    </div>
  )
}
