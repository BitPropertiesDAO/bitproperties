import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "./styles.css";

export default function Tab(props: any) {
  let navigate = useNavigate();

  return (
    <li
      className={`main--tab ${
        props.current === props.id && props.main && "brightness--animation"
      } ${!props.main && "mini--tab"}`}
      onClick={() => navigate(props.linkTo)}
      style={{
        color: props.current === props.id ? "black" : "rgb(210,210,210)",
        background: props.current === props.id ? `` : "transparent",
        boxShadow: props.current === props.id ? `` : "none",
      }}
    >
      <Icon icon={props.icon} height="25" className="tab--icon" />
      <div className={`Alchemy--tab--title`}>{props.title}</div>
    </li>
  );
}
