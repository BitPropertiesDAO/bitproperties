import React from "react";
import ReactDOM from "react-dom";
import { Web3ReactProvider } from "@web3-react/core";
import "antd/dist/antd.less";
import store from "./store";
import { Provider } from "react-redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { getLibrary } from "./utils/misc";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import HomePage from "./Components/Home/HomePage";
import Header from "./Components/Header/Header";

import Explore from "./Components/Explore/Explore";

import Creation from "./Components/DaoManager/Creation";

import BasicDetails from "./Components/DaoManager/BasicDetails";
import Governance from "./Components/DaoManager/Governance";
import Tokenomics from "./Components/DaoManager/Tokenomics";
import Confirmation from "./Components/DaoManager/Confirmation";

import DAODashBoard from "./Components/DAO/DashBoard";
import DAOPage from "./Components/DAO/DAOPage";
import DAOProperties from "./Components/DAO/DAOProperties";
import Property from "./Components/DAO/Property";
import Senate from "./Components/DAO/Senate";
import ExploreDAOs from "./Components/Explore/ExploreDAOs";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="app/Explore/DAOS" element={<Explore />}>
                <Route
                  path="/app/Explore/DAOS"
                  element={<ExploreDAOs />}
                ></Route>
              </Route>
              <Route path="app/Alchemy/create" element={<Creation />}>
                <Route
                  path="/app/Alchemy/create"
                  element={<BasicDetails />}
                ></Route>
                <Route
                  path="/app/Alchemy/create/governance"
                  element={<Governance />}
                ></Route>
                <Route
                  path="/app/Alchemy/create/tokenomics"
                  element={<Tokenomics />}
                ></Route>
                <Route
                  path="/app/Alchemy/create/confirmation"
                  element={<Confirmation />}
                ></Route>
              </Route>
            </Route>
            <Route path="app/DAO" element={<DAODashBoard />}>
              <Route
                path="/app/DAO/:DAORouterID/Dashboard"
                element={<DAOPage />}
              ></Route>
              <Route
                path="/app/DAO/:DAORouterID/Senate/:DAOGovernanceToken"
                element={<Senate />}
              ></Route>
              <Route
                path="/app/DAO/:DAORouterID/Properties"
                element={<DAOProperties />}
              ></Route>
              <Route
                path="/app/DAO/:DAORouterID/Properties/:PropertyAddress"
                element={<Property />}
              ></Route>
            </Route>
            <Route path="*" element={<App />}></Route>
          </Routes>
        </BrowserRouter>
      </Web3ReactProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
