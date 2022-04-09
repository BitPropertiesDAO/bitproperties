import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useParams, useLocation } from "react-router";

export function RedirectExploreDAOS() {
    return(
        <Navigate to="/app/Explore/DAOS"/>
    )
}

export function RedirectDAODashboard() {
    let location = useLocation()
    let redirectURL = location.pathname + "/Dashboard"

    return(
        <Navigate to={redirectURL}/>
    )
}