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
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.username}</div>
        </div>
        <div className='ml-5'>
            <Button onClick={() => {
                navigate(`/${user.id}`)
            }}>{copy.buttons.edit}</Button>
        </div>
    </div>
  )
}
