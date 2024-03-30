import React from 'react'

export default function Rooms({ params }: { params: { room: string } }) {
  return <div>My Post: {params.room}</div>
}