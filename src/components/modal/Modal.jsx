import ReactModal from 'react-modal';
import Button from '../Button';
import {useState} from 'react';
import logoModal from '../../logo.png';
import Header from './Header';

ReactModal.setAppElement('#root');

const Modal = () => {

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
            child={<img src={logoModal} alt='LogoHeaderModal'/>}
            button={<button className='buttonClose' onClick={closeModal}><i className="fas fa-window-close" title='Close'></i></button>}
          />
          <Header 
            typeStyle='Modal-Header-secoundMid'
          />
          <div className='Modal-Content'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  {/* Cards */}
                </div>
              </div>
            </div>
          </div>
          </ReactModal>
        </div>
      );
}


export default Modal;