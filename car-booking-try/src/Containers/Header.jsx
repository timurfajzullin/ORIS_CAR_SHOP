import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setSearchTerm(params.get('search') || '');
    }, [location.search]);


    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            // Перенаправляем на страницу результатов с поисковым запросом
            navigate(`/cars?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search or type"
                className="search-box"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <img src="../images/profile_icon.png" className="img-profile"/>
        </div>
    )
}

export default Header;