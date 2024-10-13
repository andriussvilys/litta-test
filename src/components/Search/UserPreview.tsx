import React from 'react'
import { User } from '../../definitions/user'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { copy } from '../../definitions/copyText'

export default function UserPreview({ user }: { user: User }) {
    const navigate = useNavigate()
  return (
    <div className='flex justify-content-between align-items-center'>
        <div className='flex gap-3'>
            <p style={{fontFamily:"arial"}}>{user.firstName}</p>
            <p style={{fontFamily:"arial"}}>{user.lastName}</p>
            <p style={{fontFamily:"arial"}}>{user.username}</p>
        </div>
        <div className='ml-5'>
            <Button onClick={() => {
                navigate(`/${user.id}`)
            }}>{copy.buttons.edit}</Button>
        </div>
    </div>
  )
}
