import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mx-2 my-4 w-64">
      <img
        className="w-full h-40 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-500 mb-2">{cuisines.join(', ')}</p>
        <div className="flex items-center mb-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded-md mr-2">
            {avgRating}
          </span>
          <span className="text-gray-500">
            {costForTwo / 100} for two
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
