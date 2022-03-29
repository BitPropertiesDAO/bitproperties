import React from "react";
import { useParams } from "react-router";

export default function Profile() {
  let { accountID } = useParams();
  return <div>{accountID}</div>;
}
