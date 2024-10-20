import "./Fan_fav.css"

const FanFave = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <div className='fan-fav' key={index}>
                    <h3>{item.title}</h3>
                    <h1>{item.heading}</h1>
                    <p>{item.paragraph}</p>
                    <a href={item.link}>{item.button}</a>
                </div>
            ))}
        </>
    );
}

export default FanFave;