import Arrow from './arrows/ArrowR';
import loadingPopUp, {notFoundPopUp} from './Alert';
import message from '../utils/messages.json';

const PreviousPage = ({page, newPage}) => {

    const {next} = page;

    const nextPage = () => {
        
        if(next){
            loadingPopUp(message.loadingResourceMessage).then(() =>{
                newPage(next);
            });
        }else{
            notFoundPopUp(message.thereIsNothingHereMessage).then(() => {});
        }
    }

    return (
        <div className='container-buttons'>
            <Arrow  handleFunction={nextPage} direction='right'/>
        </div>
    )
}

export default PreviousPage;