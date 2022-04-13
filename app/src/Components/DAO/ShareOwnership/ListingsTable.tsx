import "./styles.css";

export default function ListingsTable(props: any) {
  return (
    <div className="listing--grid">
      <p className="listing--grid--item">ListingID</p>
      <p className="listing--grid--item">Active?</p>
      <p className="listing--grid--item">Number of Shares</p>
      <p className="listing--grid--item">Price per Share (ETH)</p>
      <p className="listing--grid--item">Share Owner</p>
      <p className="listing--grid--item"></p>
      {props.children}
    </div>
  );
}
