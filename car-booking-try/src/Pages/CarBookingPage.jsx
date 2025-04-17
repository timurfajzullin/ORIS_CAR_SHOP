import '../Styles/App.css'
import CarCard from "../Containers/CarCard.jsx";
import {useEffect} from "react";
import {fetchData} from "../../services/catalog.js";

function CarBookingPage() {
    useEffect(() => {
        const fetchDataLocal = async () => {
            await fetchData();
        }

        console.log(fetchDataLocal())
    }, []);



    return (
        <div>
            <div className="dashboard">
                <div className="car-cards">
                    <CarCard/>
                </div>
            </div>
        </div>
    )
}

export default CarBookingPage;
