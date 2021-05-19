import Modal from './modal/Modal';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">#{props.id}</h3>
                <h5 className='card-subtitle'><i className="fas fa-map-marker-alt"></i> {props.name}</h5>
                <ul className='card-list'>
                    <li className='card-list__item'>Type: {props.type}</li>
                    <li className='card-list__item'>Dimension: {props.dimension}</li>
                </ul>
                <Modal/>
            </div>
        </div>
    )
}

export default Card;