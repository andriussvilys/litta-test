import React from 'react'
import { Button } from 'primereact/button'
import { Toolbar } from 'primereact/toolbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { copy } from '../definitions/copyText'

export default function UserLayout() {
    const navigate = useNavigate()
    const onSearchClick = () => {
        navigate('/')
    }
    const onCreateClick = () => {
        navigate('/create')
    }
    const content = (
        <div className="flex gap-3">
            <Button onClick={onSearchClick}>{copy.buttons.search}</Button>
            <Button onClick={onCreateClick}>{copy.buttons.create}</Button>
        </div>
    )
  return (
    <div className="flex flex-column gap-4">
        <Toolbar end={content} />
        <Outlet/>
    </div>
  )
}
