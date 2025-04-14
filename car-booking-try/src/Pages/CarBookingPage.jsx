import '../Styles/App.css'
import CarCard from "../Containers/CarCard.jsx";

function CarBookingPage() {
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
