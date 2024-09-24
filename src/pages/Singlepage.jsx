import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'
import { BackIcon, EditIcon } from '../assets/images/icon'

function Singlepage() {
  const navigate = useNavigate()
  const { users } = useContext(Context)
  const { id } = useParams()
  const user = users.find(user => user.id == id)

  return (
    <>
      <button onClick={() => navigate(-1)}><BackIcon /></button>
      <div className='mt-[50px] w-[60%] bg-slate-50 p-3 rounded-md shadow mx-auto'>
        <div className='flex items-center py-3 justify-between border-b-[1px] border-b-gray-300'>
          <div className='flex items-center gap-3'>
            <img className='w-[100px] h-[100px] object-cover rounded-[50%]' src={user.avatar} alt="avatar icon" width={100} height={100} />
            <div>
              <strong className='text-lg'>{user.name}</strong>
              <p className='text-gray-400 font-normal'>{user.email}</p>
            </div>
          </div>
          <button onClick={() => navigate("update")} className='w-[40px] hover:scale-110 duration-300'><EditIcon/></button>
        </div>
        <div className='flex items-center justify-between border-b-[1px] border-b-gray-300 py-3'>
          <p className='text-lg'>Name</p>
          <p className='text-lg'>{user.name}</p>
        </div>
        <div className='flex items-center justify-between border-b-[1px] border-b-gray-300 py-3'>
          <p className='text-lg'>Email</p>
          <p className='text-lg'>{user.email}</p>
        </div>
        <div className='flex items-center justify-between border-b-[1px] border-b-gray-300 py-3'>
          <p className='text-lg'>Phone</p>
          <p className='text-lg'>{user.phone}</p>
        </div>
        <div className='flex items-center justify-between  py-3'>
          <p className='text-lg'>Address</p>
          <p className='text-lg'>{user.address}</p>
        </div>
      </div>
    </>
  )
}

export default Singlepage
