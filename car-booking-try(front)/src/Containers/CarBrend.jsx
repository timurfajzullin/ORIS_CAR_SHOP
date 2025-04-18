import { useNavigate } from 'react-router-dom';

function CarBrend() {
    const navigate = useNavigate();

    const handleBrandClick = (brandName) => {
        navigate(`/catalog?search=${encodeURIComponent(brandName)}`);
    };

    return (
        <div className="brand-logos">
            <div className="brand-logos_card" onClick={() => handleBrandClick('Jaecoo')}>
                <img src="../images/CarLogos/jaecoo.png" alt="jaecoo"/>
            </div>
            <div className="brand-logos_card" onClick={() => handleBrandClick('Jaecoo')}>
                <img src="../images/CarLogos/jaecoo.png" alt="jaecoo"/>
            </div>
            <div className="brand-logos_card" onClick={() => handleBrandClick('Subaru')}>
                <img src="../images/CarLogos/subaru.png" alt="Subaru"/>
            </div>
            <div className="brand-logos_card" onClick={() => handleBrandClick('Subaru')}>
                <img src="../images/CarLogos/subaru.png" alt="Subaru"/>
            </div>
        </div>
    )
}

export default CarBrend;