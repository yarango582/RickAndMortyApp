import Arrow from './arrows/ArrowL';
import loadingPopUp, {notFoundPopUp} from './Alert';
import message from '../utils/messages.json';

const PreviousPage = ({page, newPage}) => {

    const {prev} = page;

    const previousPage = () => {
        if(prev){
            loadingPopUp(message.loadingResourceMessage).then(() =>{
                newPage(prev);
            });
        }else{
            notFoundPopUp(message.thereIsNothingHereMessage).then(() => {});
        }
    }

    return (
        <div className='container-buttons'>
            <Arrow  handleFunction={previousPage} direction='left'/>
        </div>
    )
}

export default PreviousPage;