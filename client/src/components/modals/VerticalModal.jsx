import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading';
import "../../style/modal.css"
export function VerticalModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {props.message}

      </Modal.Body>

        <Modal.Footer>
          <div className='btn-modal-quality'>
            {props.anotherbutton == "true" ? <button className={props.classanotherbutton} onClick={props.clickanotherbutton}>{props.anotherbuttonmessage}</button> : props.anotherbutton == "loading" ? <Loading/> : <></>}
            <button className='btn btn-recovery--modal text-white' onClick={props.onHide}><Link className='text-decoration-none text-white' to={props.to}>{props.namebutton}</Link></button>
          </div>
        </Modal.Footer>
    </Modal>
  );
}