const brends= [
    {
        alt: "Lamborghini",
        src: "../images/Lamborghini_logo.png"
    },
    {
        alt: "BMW",
        src: "../images/BMW_logo.png"
    },
    {
        alt: "Volvo",
        src: "../images/Volvo_logo.png"
    },
    {
        alt: "Mercedes-Benz",
        src: "../images/Mercedes-Benz_logo.png"
    },
]

function CarBrend()
{
    return (
        <div className="brand-logos">
            <div className="brand-logos_card">
                <img src="../images/Skoda_logo.png" alt="Lamborghini"/>
            </div>
            <div className="brand-logos_card">
                <img src="../images/Logo_Porsche.png" alt="BMW"/>
            </div>
            <div className="brand-logos_card">
                <img src="../images/Volvo_logo.png" alt="Volvo"/>
            </div>
            <div className="brand-logos_card">
                <img src="../images/Mercedes-Benz_logo.png" alt="Mercedes-Benz"/>
            </div>
        </div>
    )
}

export default CarBrend;