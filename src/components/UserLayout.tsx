import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { Toolbar } from 'primereact/toolbar'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

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
            <Button onClick={onSearchClick}>Search</Button>
            <Button onClick={onCreateClick}>Create</Button>
        </div>
    )
  return (
    <div className="flex flex-column gap-4">
        <Toolbar end={content} />
        <Outlet/>
    </div>
  )
}
