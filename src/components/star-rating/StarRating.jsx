import { FaStar } from "react-icons/fa"
import { useState } from "react";
import "./StarRating.css";


const StarRating = ({noOfStars}) => {
  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);

  }

  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    
    // on mouse leave we shouldn't change the rating
    // setHover should be equal to rating, else on mouse leave
    // setHover would set value to current index
    setHover(rating);
  }


  
    return (
    <div className="star-rating">
        {
            [...Array(noOfStars)].map((_, index) => {
                return <FaStar
                key={index}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={40}
                className={index <= (hover || rating) ? "active" : "inactive"}
                />
            })

        }
    </div>
  )
}
export default StarRating