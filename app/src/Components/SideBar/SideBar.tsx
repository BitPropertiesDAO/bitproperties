import React from "react";

export default function SideBar(props: any) {
  return (
    <div className="side--bar--left">
      <div className="tab--group"> {props.children}</div>
    </div>
  );
}
