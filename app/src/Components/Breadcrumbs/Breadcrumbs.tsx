import React from "react"
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import store from "../../store";
import BreadcrumbItem from "./BreadcrumbItem";

const DAORouterBreadcrumb = (props: any) => (
    <span>{store.getState().BreadcrumbsReducer.DAOName}</span>
);

const PropertyBreadcrumb = (props: any) => (
    <span>{store.getState().BreadcrumbsReducer.PropertyName}</span>
);

const defaultBreadcrumb = (props: any) => (
    <span>{props.match.pathname.split('/').pop()}</span>
);

const routes = [
    {
        path: "/app",
    },
    {
        path: "/app/Explore/DAOs",
        breadcrumb: "My DAOs"
    },
    {
        path: "/app/DAO",
        breadcrumb: "My DAOs",
        children: [
            {
                path: "/app/DAO/:DAORouterID",
                breadcrumb: DAORouterBreadcrumb,
            },
            {
                path: "/app/DAO/:DAORouterID/Properties",
                breadcrumb: "Properties",
                children: [
                    {
                        path: "/app/DAO/:DAORouterID/Properties/:PropertyAddress",
                        breadcrumb: PropertyBreadcrumb,
                    },
                ]
            },
            {
                path: "/app/DAO/:DAORouterID/Senate",
                children: [
                    {
                        path: "/app/DAO/:DAORouterID/Senate/:DAOGovernanceToken",
                        breadcrumb: "Senate",
                    },
                ]
            }
        ]
    },
]

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true })

  return (
    <React.Fragment>
      {

        breadcrumbs
        .map(({
            match,
            breadcrumb,
          }, index, arr) => (
            <>
            <BreadcrumbItem
                pathname={match.pathname}
                breadcrumb={breadcrumb}
                isLast={arr.length - 1 != index ? false : true}
            />
            </>
          ))
        }
    </React.Fragment>
  );
}

export default Breadcrumbs