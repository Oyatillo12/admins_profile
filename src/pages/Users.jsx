import React, { useContext, useRef, useState } from 'react'
import { AddIcon, DeleteIcon, MoreIcon } from '../assets/images/icon'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
import Modal from '../components/Modal'

function Users() {
  const navigate = useNavigate()
  const { users, setUser } = useContext(Context)
  const [deletedUser, setdeleteUser] = useState(null)

  const [openModal, setOpenModal] = useState(false)

  function handleDeleteShow(id) {
    const deletedUser = users.find((user) => user.id == id)
    setOpenModal(true)
    setdeleteUser(deletedUser)
  }
  function deleteUser() {
    setUser(users.filter((user) => user != deletedUser))
    setOpenModal(false)
  }



  return (
    <>
      <div>
        <h2 className='text-[40px] mb-8 mt-[20px]'>Users' List</h2>
        <div className='flex items-center mb-[60px] justify-between'>
          <button onClick={() => navigate("users/add")} className='text-[#F6F6F6] text-[18px] rounded-md bg-[#0832DE] leading-6 py-[10px] flex items-center gap-2 px-[15px] hover:opacity-75'>
            <AddIcon />
            <span >Add User</span>
          </button>
          <div>
            <input className='outline-none py-[10px] border border-[C4C4C4] rounded-lg px-[15px] w-[300px]' type="text" placeholder='Search' />
          </div>
        </div>
        <table className='w-full'>
          <thead>
            <tr>
              <th className=' py-[10px] text-[14px] text-[#707070] border-b-[1px] border-[C4C4C4]'>ID</th>
              <th className=' py-[10px] text-[14px] text-[#707070] border-b-[1px] border-[C4C4C4]'>Fullname</th>
              <th className=' py-[10px] text-[14px] text-[#707070] border-b-[1px] border-[C4C4C4]'>Phone Number</th>
              <th className=' py-[10px] text-[14px] text-[#707070] border-b-[1px] border-[C4C4C4]'>Email</th>
              <th className=' py-[10px] text-[14px] text-[#707070] border-b-[1px] border-[C4C4C4]'>Address</th>
              <th className=' py-[10px] text-[14px] text-[#707070] border-b-[1px] border-[C4C4C4]'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length ? users.map((item, index) => (
              <tr key={item.id} className='text-center'>
                <td className=' py-4 text-[14px] '>{index + 1}</td>
                <td className=' py-4 text-[14px]  space-x-2'>
                  <img className='w-[45px] inline-block h-[45px] object-cover rounded-[50%]' src={item.avatar} alt="avatar img" width={45} height={45} />
                  <span>{item.name}</span>
                </td>
                <td className=' py-4 text-[14px] '>{item.phone}</td>
                <td className=' py-4 text-[14px] '>{item.email}</td>
                <td className=' py-4 text-[14px] '>{item.address}</td>
                <td className=' py-4 space-x-2'>
                  <button onClick={() => navigate(`users/${item.id}`)} className='duration-300 inline-block bg-white w-[30px] hover:scale-[1.2]'><MoreIcon /></button>
                  <button onClick={() => handleDeleteShow(item.id)} className='duration-300 inline-block bg-white block w-[30px]  hover:scale-[1.2]'> <DeleteIcon /></button>
                </td>
              </tr>
            )) : <tr className='text-xl mt-5'><td>You haven't any users </td></tr>}

          </tbody>
        </table>
      </div>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div className='p-4 bg-gray-200 rounded-md w-[400px]'>
          <h2 className='text-xl font-bold'>Delete User</h2>
          <p className='text-lg mb-2'>Are you sure you want to delete this user?</p>
          <div className='flex justify-end gap-4'>
            <button onClick={() => setOpenModal(false)} className='bg-[#F25522] text-[#F6F6F6] px-[20px] py-[10px] rounded-md hover:opacity-75'>Cancel</button>
            <button onClick={deleteUser} className='bg-[#0832DE] text-[#F6F6F6] px-[20px] py-[10px] rounded-md hover:opacity-75'>Delete</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Users
