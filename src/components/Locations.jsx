import Card from './Card';

const Locations = ({locations}) => {

    return (
        <div className='card-distribution'>
            {
                locations.map((data) => {
                    return(
                        <div key={data.id}> 
                                <Card 
                                    id={data.id}
                                    name={data.name}
                                    type={data.type}
                                    dimension={data.dimension}
                                />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Locations;