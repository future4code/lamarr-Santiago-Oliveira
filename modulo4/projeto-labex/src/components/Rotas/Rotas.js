import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";


const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trips/list" element={<ListTripsPage />} />
                <Route path="/trips/application/:id" element={<ApplicationFormPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/admin/trips/create/" element={<CreateTripPage />} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas