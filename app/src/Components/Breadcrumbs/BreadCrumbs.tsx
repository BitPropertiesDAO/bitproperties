import { useLocation, useNavigate } from "react-router";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "./BreadCrumbsStyles.css";

export default function BreadCrumbs(props: any) {
  let { DAORouterID, PropertyName, PropertyAddress } = useParams();
  let location = useLocation();
  let navigate = useNavigate();

  function BreadCrumbItem(props: any) {
    return (
      <div
        className="breadcrumbitem"
        onClick={() => navigate(`/${props.route}`)}
        style={{ marginRight: 35 }}
      >
        <div style={{ marginRight: 35 }}>{props.children}</div>
        {props.arrow === true && <div>{">"}</div>}
      </div>
    );
  }

  const [breadcrumbs, setBreadcrumbs] = useState<any>();
  useEffect(() => {
    setBreadcrumbs(
      <div className="breadcrumbs">
        <BreadCrumbItem arrow={true} item="App" route={`app/Explore/DAOS`}>
          App
        </BreadCrumbItem>
        <BreadCrumbItem arrow={true} route={props.rootRoute}>
          {props.root}
        </BreadCrumbItem>
        {/* <BreadCrumbItem item="App" route={`app/Explore/DAOS`}></BreadCrumbItem> */}
        {PropertyName && (
          <BreadCrumbItem
            route={`app/DAO/${DAORouterID}/Properties/${PropertyAddress}/${PropertyName}`}
          >
            {PropertyName}
          </BreadCrumbItem>
        )}
      </div>
    );
    console.log(props.root);
  }, [location]);

  return <div className="bread--container">{breadcrumbs}</div>;
}
