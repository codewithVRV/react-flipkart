function HomeCard ({productDemoImage, name="vishnu", price}) {
    return (
        <>
            <div className="card" style="width: 18rem;">
                <img src={productDemoImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">{price}</a>
                </div>
            </div>
        </>
    )
}

export default HomeCard;