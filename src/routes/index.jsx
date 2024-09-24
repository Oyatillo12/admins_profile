import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Settings, Users, AddForm, Singlepage } from '../pages'

function CustomRoutes() {
    return (
        <div className='w-[80%] px-8 pt-8'>
            <Routes>
                <Route path='/' element={<Users />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/users/add' element={<AddForm />} />
                <Route path='/users/:id' element={<Singlepage />} />
                <Route path='/users/:id/update' element={<AddForm />} />
                <Route path='*' element={<p className='text-center mt-8 text-2xl'>Not Found Page Let try that again</p>} />
            </Routes>
        </div>
    )
}

export default CustomRoutes
