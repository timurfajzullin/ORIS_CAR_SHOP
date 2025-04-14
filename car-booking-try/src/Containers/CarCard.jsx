import {Link, useSearchParams} from "react-router-dom";
import {cars} from "../data/dataCars.jsx";

function CarCard() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    const filteredCars = cars.filter(car =>
        car.brand.toLowerCase().includes(searchQuery.toLowerCase()));

    return (filteredCars.map(car => (
        <Link
            to={`/car/${car.id}`}
            key={car.id}
            className="card">
            <div className="card-top">
                <img src="../images/circle_icon.png" className="img-icon"/>
                <p className="rec-text">{car.percentRecommends}% Recommend</p>
            </div>
            <div className="wrapper-img">
                <img src={car.pictureCard} alt="BMW" width="200" className="card-img"/>
            </div>
            <div className="card-info">
                <h2>{car.brand}</h2>
                <div className="card-bottom">
                    <div className="card-bottom-leftSide">
                        <img src="../images/vectors_icon.png" className="img-icon"/>
                        <p className="stats-text">{car.miles}K</p>
                        <img src="../images/add-favourite_icon.png" className="img-icon"/>
                        <img src="../images/power_icon.png" className="img-icon"/>
                    </div>
                    <div className="card-bottom-rightSide">
                        <p className="stats-text">${car.price}/h</p>
                    </div>
                </div>
            </div>
        </Link>
    )))
}

export default CarCard;