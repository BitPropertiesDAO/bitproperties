import { useNavigate } from "react-router";

export function FormLinksBottom(props: any) {
  let navigate = useNavigate();
  return (
    <div className="alchemy--bottom--links">
      <button
        onClick={() => navigate(`${props.Back}`)}
        className="plain--button"
      >
        {props.Back && <>Back</>}
      </button>
      <button
        onClick={() => navigate(`${props.Next}`)}
        className="plain--button"
      >
        {props.Next && <>Next Section</>}
      </button>
    </div>
  );
}

export function InputSubheading(props: any) {
  return <h2 className="section--right--subtitle">{props.children}</h2>;
}

export function InputGroup(props: any) {
  return <div className="alchemy--input--group">{props.children}</div>;
}

export function AppHeader(props: any) {
  return (
    <h1 className="section--section--right--subtitle">{props.children}</h1>
  );
}
