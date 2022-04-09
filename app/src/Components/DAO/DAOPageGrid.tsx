import React from "react";

export default function DAOPageGrid(props: any) {
  const GridItemTop = (props: any) => {
    return (
      <div className="DAO--grid--top--item">
        <div className="DAO--grid--top--item--top">
          <div className="DAO--grid--top--item--container">
            <div className="DAO--grid--top--text">{props.title}</div>
          </div>
        </div>
        <div className="DAO--grid--top--item--bottom ">
          <div className="DAO--grid--top--item--container">
            {/* <div>yo</div> */}
            <div className="DAO--grid--top--text DAO--grid--top--result">
              <div>{props.result}</div>
              <div className="unit">{props.unit}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="DAO--grid--top">
      <GridItemTop
        title={props.title1}
        result={props.result1}
        unit={props.unit1}
      ></GridItemTop>
      <GridItemTop
        title={props.title2}
        result={props.result2}
        unit={props.unit2}
      ></GridItemTop>
      <GridItemTop
        title={props.title3}
        result={props.result3}
        unit={props.unit3}
      ></GridItemTop>
      <GridItemTop
        title={props.title4}
        result={props.result4}
        unit={props.unit4}
      ></GridItemTop>
    </div>
  );
}
