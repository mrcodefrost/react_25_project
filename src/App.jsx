import './App.css';
import Accordion from './components/accordion/accordion';
import ImageSlider from './components/image-slider/ImageSlider';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';

const App = () => {
  return (
    <div className="App">

    {/* <Accordion/> */}
    {/* <RandomColor/> */}
    {/* <StarRating noOfStars={5}/> */}
    <ImageSlider
      url={'https://picsum.photos/v2/list'}
      page={"1"}
      limit={"10"}
    />

    </div>
  )
}
export default App