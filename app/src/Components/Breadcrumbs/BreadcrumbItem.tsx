import React from "react"
import { NavLink } from "react-router-dom"
import "./breadcrumb.css"

interface Props {
    pathname: any,
    breadcrumb: any,
    isLast: boolean
}

export const BreadcrumbItem: React.FC<Props> = (props:any) => {
    return(
        <span key={props.pathname}>
            {
                props.isLast ?
                <span className="lastCrumb">
                    {props.breadcrumb}
                </span>
                : 
                <NavLink 
                    to={props.pathname}
                    style={() => ({
                        color: '#7595b3'
                    })}
                >{props.breadcrumb} {'> '}</NavLink>
            }
        </span>
    )
}

export default BreadcrumbItem
