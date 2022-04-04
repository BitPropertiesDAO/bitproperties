import React from "react";
import { useNavigate } from "react-router";
import "./styles.css";

export default function PropertyCard(props: any) {
  let navigate = useNavigate();

  return (
    <div
      key={props.id}
      onClick={() => navigate(props.navigateTo)}
      className="property--card"
    >
      {props.propertyAddress}
    </div>
  );
}
