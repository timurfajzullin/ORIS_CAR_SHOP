import '../Styles/App.css'
import CarBrend from "../Containers/CarBrend.jsx";
import CarCard from "../Containers/CarCard.jsx";

function HomePage() {
    return (
        <div>
            <div className="dashboard">
                <div className="brand-logos">
                    <CarBrend/>
                </div>
                <div className="car-cards">
                    <CarCard/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
