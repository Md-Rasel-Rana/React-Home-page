

const Card = (props) => {
    return (
            <div>
                <div className="card mt-3" >
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.p}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
    );
};

export default Card;