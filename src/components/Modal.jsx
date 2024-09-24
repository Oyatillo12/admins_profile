import React from 'react'

function Modal({children, openModal, setOpenModal, isLoading, setIsloading}) {
    function clickedModal(e){
        if(e.target.id == 'wrapper'){
           if(openModal) setOpenModal(false);
           if(isLoading) setIsloading(false);
           return false;
        }
    }
  return (
    <div onClick={clickedModal} id='wrapper' className={`fixed backdrop-blur inset-0 flex items-center justify-center duration-300 ${openModal || isLoading ? "scale-1" : "scale-0"}`} >
      <div className=''>
        {children}
      </div>
    </div>
  )
}

export default Modal
