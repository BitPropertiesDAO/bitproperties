import { useNavigate } from "react-router";
// import { Icon } from "@iconify/react";

export default function AlchemyTab(props: any) {
  let navigate = useNavigate();

  return (
    <li
      className={`Alchemy--tab--container ${
        props.current === props.id && "brightness--animation"
      }`}
      onClick={() => navigate(props.linkTo)}
      style={{
        color: props.current === props.id ? "black" : "rgb(210,210,210)",
        background: props.current === props.id ? `` : "transparent",
      }}
    >
      {/* <Icon icon={props.icon} height="25" className="tab--icon" /> */}
      <div className="Alchemy--tab--title">{props.title}</div>
    </li>
  );
}
