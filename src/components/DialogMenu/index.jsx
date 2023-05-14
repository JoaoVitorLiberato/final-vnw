/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';


export default function DialogMenu({ children, open, close }) {
  const fullscreen = "xxl-down"

  return(
    <Modal 
      show={open} 
      fullscreen={fullscreen} 
      onHide={close}
    >
      <Modal.Header closeButton>
        <Link 
          to={"/"} 
          onClick={close}
          style={{
            color:"#000",
            fontSize: '20px',
            fontWeight: "bold",
            textTransform: "uppercase"
          }}
        >
          <HomeIcon/> Home
        </Link>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}