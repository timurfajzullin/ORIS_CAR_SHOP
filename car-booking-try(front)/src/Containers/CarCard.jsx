import { useState, useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom";

export const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:5173/CarCard/GetCarCardsList");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

function CarCard() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchData();
                setCars(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const filteredCars = searchQuery
        ? cars.filter(car =>
            car.brand.toLowerCase().includes(searchQuery.toLowerCase()))
        : cars;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return filteredCars.map(car => (
        <Link
            to={`/car/${car.id}`}
            key={car.id}
            className="card">
            <div className="card-top">
                <img src="../images/circle_icon.png" className="img-icon"/>
                <p className="rec-text">{car.percentRecommends}% Recommend</p>
            </div>
            <div className="wrapper-img">
                <img src={car.pictureCard} alt={car.brand} width={130} className="card-img"/>
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
    ));
}

export default CarCard;