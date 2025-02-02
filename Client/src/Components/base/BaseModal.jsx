import { Modal } from 'flowbite-react'
import React from 'react'

const DEFAULT_VALUES = {
    show:false,
    onClose:()=>{},
    children:<></>,
    title:"",
    height:""
}

function Base({
    show, 
    onClose, 
    children,
    title,
    height
}) {
  return (
    <Modal  show = {show} onClose={onClose}>
        <Modal.Header  >{title}</Modal.Header>
        <Modal.Body className='border' >{children}</Modal.Body>
    </Modal>
  )
}

const BaseModal = (props) => {
    return <Base {...DEFAULT_VALUES} {...props}/>
}

export default BaseModal