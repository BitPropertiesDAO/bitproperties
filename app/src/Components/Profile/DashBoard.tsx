import React from "react";
import { useParams } from "react-router";

import "./styles.css";

export default function DashBoard() {
  let { accountID } = useParams();

  return <div>{accountID}Yo</div>;
}
