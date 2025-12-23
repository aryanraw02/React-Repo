import constants from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // for cleaning the code we can also use destructuring as below it is optional chaning
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={constants.CDN_url + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars </h4>
      <h4>{costForTwo}</h4>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
