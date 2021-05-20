import ReactModal from 'react-modal';
import Button from '../../Button';
import {useState} from 'react';
import Header from '../Header';
import Details from './DetailsCharacter';

ReactModal.setAppElement('#root');

const Modal = ({character}) => {

    
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
        <div>
          <Button handleClick={openModal}/>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            className="Modal-Details-Character"
            overlayClassName='no-overlay'
          >
          <Header 
            typeStyle='Modal-Header-Character ' 
            button={<button className='buttonClose' onClick={closeModal}><i className="fas fa-window-close" title='Close'></i></button>}
          />
          <div className='Modal-Content-Datails'>
              <div className='container'>
                  <div className='row'>
                      <div className='col-12 justify-content-center text-center'>
                        <Details character={character}/>
                      </div>
                  </div>
              </div>
          </div>
          </ReactModal>
        </div>
      );
}


export default Modal;