import ReactModal from 'react-modal';
import Button from '../Button';
import {useState} from 'react';
import logoModal from '../../logo.png';
import Header from './Header';
import Residents from './Residents';

ReactModal.setAppElement('#root');

const Modal = ({residents, dimension, type}) => {

    
    const [modalIsOpen,setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      
    }
  
    function closeModal(){
      setIsOpen(false);
    }

    return (
        <div className='container-modal'>
          <Button handleClick={openModal}/>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            className="Modal"
            overlayClassName="Modal-Overlay"
          >
          <Header 
            typeStyle='Modal-Header-firstMid ' 
            child={
            <div>
              <img src={logoModal} alt='LogoHeaderModal'/>
            </div>
          }
            button={<button className='buttonClose' onClick={closeModal}><i className="fas fa-window-close" title='Close'></i></button>}
          />
          <Header 
            typeStyle='Modal-Header-secoundMid'
          />
          <div className='Modal-Content'>
              <Residents residents={residents} type={type} dimension={dimension} window={modalIsOpen}/>
          </div>
          </ReactModal>
        </div>
      );
}


export default Modal;