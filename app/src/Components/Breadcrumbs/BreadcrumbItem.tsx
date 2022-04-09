import React from "react"
import { NavLink } from "react-router-dom"

interface Props {
    pathname: any,
    breadcrumb: any,
    isLast: boolean
}

export const BreadcrumbItem: React.FC<Props> = (
    props:any
) => {
    return(
        <span key={props.pathname}>
            <NavLink to={props.pathname}>{props.breadcrumb} </NavLink>
            {props.isLast ? null : <span>{'> '}</span>}
        </span>
    )
}

export default BreadcrumbItem
