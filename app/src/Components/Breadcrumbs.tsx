import React from "react"
import { NavLink } from "react-router-dom"
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import store from "../store";

const DAORouterBreadcrumb = (props: any) => (
    <span>{store.getState().BreadcrumbsReducer.DAOName}</span>
);

const routes = [
    {
        path: "/"
    },
    {
        path: "app/Explore/DAOS",
        breadcrumb: "MyDAOs"
    },
    {
        path: "/app/DAO",
        breadcrumb: "MyDAOs"
    },
    {
        path: "/app/DAO/:DAORouterID/Dashboard",
        breadcrumb: DAORouterBreadcrumb
    },
]

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true })

  console.log(breadcrumbs)

  return (
    <React.Fragment>
      {
        breadcrumbs
        .map(({
            match,
            breadcrumb
          }) => (
            <>
            <span key={match.pathname}>
                <NavLink to={match.pathname}>{breadcrumb}  </NavLink>
            </span>
            </>
          ))
        }
    </React.Fragment>
  );
}

export default Breadcrumbs