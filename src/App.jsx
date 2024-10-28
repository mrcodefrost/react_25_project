import './App.css';
import Accordion from './components/accordion/accordion';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMore from './components/load-more/LoadMore';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';
import TreeView from './components/tree-view/TreeView';

const App = () => {
  return (
    <div className="App">

    {/* <Accordion/> */}

    {/* <RandomColor/> */}

    {/* <StarRating noOfStars={5}/> */}

    {/* <ImageSlider
      url={'https://picsum.photos/v2/list'}
      page={"1"}
      limit={"10"}
    /> */}

    {/* <LoadMore/> */}

    <TreeView/>

    </div>
  )
}
export default App