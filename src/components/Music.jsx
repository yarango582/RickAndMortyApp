
const Music = () => {
 
    return(
        <div>
            <iframe 
            title='Music'
            allowtransparency="true" 
            scrolling="no" 
            frameBorder="no" 
            src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fyeison-arango-74927221&color=orange_white&size=32" 
            style={{
                width: '32px',
                height: '32px',
                position: 'fixed',
                bottom: 30,
                right: 30
            }}>
            </iframe>
        </div>
    )
}

export default Music;