import React from "react";
import { useNavigate } from "react-router";

interface DAOCard {
  image?: any;
  navigateTo: string;
  DAORouter: any;
}

export default function DAOCard(props: DAOCard) {
  let navigate = useNavigate();

  return (
    <div onClick={() => navigate(props.navigateTo)}>{props.DAORouter}</div>
  );
}
