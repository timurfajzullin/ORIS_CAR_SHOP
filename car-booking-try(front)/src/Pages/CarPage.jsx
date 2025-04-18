import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "../Styles/CardInfoStyles.css";

async function fetchCarInfo(id) {
    try {
        const response = await fetch(`http://localhost:5173/CarInfo/GetCarsInfos`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const cars = await response.json();
        return cars.find(car => car.id === id);
    } catch (error) {
        console.error('Error fetching car info:', error);
        return null;
    }
}

function CarPage() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCarData = async () => {
            try {
                const carData = await fetchCarInfo(id);
                if (carData) {
                    setCar(carData);
                } else {
                    setError('Car not found');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadCarData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!car) return <div>Car not found!</div>;

    return (
        <div>
            <div className="dashboard">
                <div className="wrapper-container">
                    <div className="wrapper-tittle">
                        <div className="left-title">
                            <h2>{car.brand}</h2>
                        </div>
                        <div className="right-title">
                            <img src={"../images/money-a-icon.png"} className="img-icon"/>
                            <h2>$ {car.cost}</h2>
                        </div>
                    </div>
                    <div className="wrapper-main-info">
                        <div className="wrapper-main-info-left">
                            <img src={car.generalPicture} alt={car.brand}/>
                        </div>
                        <div className="wrapper-main-info-right">
                            <div className="wrapper-info-profile">
                                <div className="info-profile-top">
                                    <div className="info-profile">
                                        <img src={"../images/profile_icon.png"} className="img-profile"/>
                                        <div>
                                            <h3> Eric Colwell </h3>
                                            <p> Account opening date: 26 june, 2022 </p>
                                        </div>
                                    </div>
                                    <div className="info-profile-fast-info">
                                        <ul>
                                            <li>
                                                <img src={"../images/geo-icon.png"} className="img-icon"/>
                                                <p>California, USA</p>
                                            </li>
                                            <li>
                                                <img src={"../images/status-icon.png"} className="img-icon"/>
                                                <p>Pro Account</p>
                                            </li>
                                        </ul>
                                        <div className="info-profile-more">
                                            <a>Visit Profile</a>
                                            <img src={"../images/right-button-icon.png"} className="img-icon"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-profile-bottom">
                                    <div className="info-profile-contact">
                                        <p>Contact:</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <img src={"../images/phone-icon.png"} className="img-icon"/>
                                            <p>+01 213 XXX XX XX</p>
                                        </li>
                                        <li>
                                            <img src={"../images/mail-icon.png"} className="img-icon"/>
                                            <p>ericcolwell@gmail.com</p>
                                        </li>
                                    </ul>
                                    <div className="info-profile-more">
                                        <a>Message the seller</a>
                                        <img src={"../images/right-button-icon.png"} className="img-icon"/>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-info-car">
                                <ul>
                                    <li>
                                        <img src={"../images/money-icon.png"} className="img-icon"/>
                                        <h3>Price: {car.cost}</h3>
                                    </li>
                                    <li>
                                        <img src={"../images/car-icon.png"} className="img-icon"/>
                                        <h3>Make: {car.make}</h3>
                                    </li>
                                    <li>
                                        <img src={"../images/car-icon.png"} className="img-icon"/>
                                        <h3>Model: {car.model}</h3>
                                    </li>
                                    <li>
                                        <img src={"../images/car-body-icon.png"} className="img-icon"/>
                                        <h3>Body Type: {car.bodyType}</h3>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <img src={"../images/calendar-icon.png"} className="img-icon"/>
                                        <h3>Registration: {car.year}</h3>
                                    </li>
                                    <li>
                                        <img src={"../images/fuel-icon.png"} className="img-icon"/>
                                        <h3>Fuel Type: {car.fuelType}</h3>
                                    </li>
                                    <li>
                                        <img src={"../images/road-icon.png"} className="img-icon"/>
                                        <h3>Mileage: {car.mileage}</h3>
                                    </li>
                                    <li>
                                        <img src={"../images/manual-icon.png"} className="img-icon"/>
                                        <h3>Transmission: {car.transmission}</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper-catalog-photos">
                    {car.pictures && car.pictures.map((item, index) => (
                        <img key={index} src={item} alt={`Car ${index}`}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarPage;