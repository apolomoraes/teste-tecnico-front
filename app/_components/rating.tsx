import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export interface RatingProps {
  rating: number
}
const Rating = ({ rating }: RatingProps) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    rating >= i ? 
    stars.push(<AiFillStar className="h-[1.25rem] w-[1.25rem] text-red" key={i} />) : 
    stars.push(<AiOutlineStar className="h-[1.25rem] w-[1.25rem] text-red" key={i} />);
  }

  return (
    <div className="flex gap-[0.12rem]">
      {stars}
    </div>
  );
}
 
export default Rating;