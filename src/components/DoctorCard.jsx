import { useNavigate } from "react-router-dom";

const DoctorCard = ({
  name,
  specialty,
  rating,
  time,
  day,
  qualification,
  image,
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 shadow-md rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer w-full max-w-md mx-auto flex items-center gap-4" 
    onClick={()=> navigate('/doctor-details')}
    >
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-full border-2 border-teal-500"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold text-teal-800">{name}</h3>
        <p className="text-sm text-gray-700">{qualification}</p>
        <p className="text-sm text-blue-600 font-medium">{specialty}</p>

        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <span>{day}</span>
          <span>{time}</span>
        </div>

        <div className="mt-2 flex items-center gap-1 text-yellow-500 text-sm">
          {"★".repeat(Math.floor(rating))}{" "}
          <span className="text-gray-600 ml-1">({rating})</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
