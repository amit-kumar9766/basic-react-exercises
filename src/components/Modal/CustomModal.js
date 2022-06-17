import Modal from './Modal'
import { useState } from 'react'

export const CustomModal = () => {
  const [show, setShow] = useState(false)
  const hideModal = () => {
    setShow(false)
  }
  const showModal = () => setShow(true)
  return (
    <>
      <Modal show={show} handleClose={hideModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt
        corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis
        a sed impedit explicabo accusantium nihil doloremque consequuntur.
      </Modal>

      {!show && <button onClick={showModal}>Open</button>}
    </>
  )
}
