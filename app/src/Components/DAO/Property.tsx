import React from "react";
import { useParams } from "react-router";

export default function Property() {
  let { PropertyAddress } = useParams();

  return <div>Property Address: {PropertyAddress}</div>;
}
