const Card = ({ planName, planData }) => {
  console.log(planData, "data");
  return <div className="border p-4 m-2 rounded-lg">{planName}</div>;
};

export default Card;
