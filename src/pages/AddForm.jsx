import React, { useContext, useState } from 'react'
import EmptyImg from '../assets/images/empty.png'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import { BackIcon } from '../assets/images/icon'
import Modal from '../components/Modal'
import LoadingImg from '../assets/images/loading.png'


function AddForm() {
  const navigate = useNavigate()
  const [avatar, setAvatar] = useState(EmptyImg)
  const [isLoading, setIsloading] = useState(false)
  const {addUser,users} = useContext(Context)
  function handleSubmit(e){
    e.preventDefault()
    const data = {
      id:users.length ? users[users.length -1].id + 1: 1,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: e.target.address.value,
      avatar: avatar
    }
    addUser(data)
    setIsloading(true)

    setTimeout(() => {
      navigate(-1)
      setIsloading(false)
    }, 700);
  }
  return (
    <>
    <button onClick={() => navigate(-1)} className='mt-2 mb-5 block ml-[5%]'><BackIcon/> </button>
      <h2 className='text-[30px] mt-5 ml-[15%]'>Add User</h2>
      <form onSubmit={handleSubmit} className='mt-[30px] w-[70%] mx-auto'>
        <label className='mb-[14px] block'>
          <img className='w-[100px] inline-block h-[100px] object-cover rounded-[50%]' src={avatar} alt="avatar img" width={100} height={100} />
          <input onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" name='userImg' />
        </label>
        <div className='flex gap-4 flex-wrap items-center justify-between w-full'>
          <label className='w-[46%]'>
            <span className=' text-lg mb-2 block'>Full Name</span>
            <input name='name' required className='w-full outline-none border border-gray-300 py-2 px-3 rounded-md' type="text" />
          </label>
          <label className='w-[46%]'>
            <span className=' text-lg mb-2 block'>Email</span>
            <input name='email' required className='w-full outline-none border border-gray-300 py-2 px-3 rounded-md' type="email" />
          </label>
          <label className='w-[46%]'>
            <span className=' text-lg mb-2 block'>Phone Number</span>
            <input name='phone' required className='w-full outline-none border border-gray-300 py-2 px-3 rounded-md' type="tel" />
          </label>
          <label className='w-[46%]'>
            <span className=' text-lg mb-2 block'>Address</span>
            <input name='address' required className='w-full outline-none border border-gray-300 py-2 px-3 rounded-md' type="text" />
          </label>
        </div>
        <button className='w-[150px] rounded-md bg-gray-200 mt-6 py-3 ' type='submit'>Add User</button>
      </form>
      <Modal isLoading={isLoading} setIsloading={setIsloading}>
          <img src={LoadingImg} alt="icon loading" width={120} height={120} />
      </Modal>
    </>
  )
}

export default AddForm
