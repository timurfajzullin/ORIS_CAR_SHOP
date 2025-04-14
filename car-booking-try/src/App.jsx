import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import CarBookingPage  from './Pages/CarBookingPage.jsx';
import CarPage from "./Pages/CarPage.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import SettingsPage from "./Pages/SettingsPage.jsx";

function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CarBookingPage />} />
                <Route path="/car/:id" element={<CarPage />} />
                <Route path="/setting" element={<SettingsPage />} />
            </Route>
        </Routes>
    );
}

export default App;