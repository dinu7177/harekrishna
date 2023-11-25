import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        areaName,
        avgRating,
        sla,
        costForTwo,
        cuisines
    } = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="image-logo" src={CDN_URL + cloudinaryImageId}></img >
            <h3>{name}</h3>
            <h5>{areaName}</h5>
            <h5>{avgRating}  .  {sla.deliveryTime}mins</h5>
            <h5>{costForTwo}</h5>
            <h5>{cuisines.join(", ")}</h5>
        </div >
    );
};
export default RestaurantCard;