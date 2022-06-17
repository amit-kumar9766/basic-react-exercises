import { React } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  //position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  .button-class {
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }
`

const Modal = ({ children, show, handleClose }) => {
  return (
    <>
      {!!show && (
        <Overlay>
          <ModalContainer>
            {children}
            <br />
            <button className="button-class" onClick={handleClose}>
              Close
            </button>
          </ModalContainer>
        </Overlay>
      )}
    </>
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default Modal
