import './App.css';
import Accordion from './components/accordion/accordion';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMore from './components/load-more/LoadMore';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';
import TreeView from './components/tree-view/TreeView';
import { menus } from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator/QRCodeGenerator';
import LightDarkMode from './components/light-dark-mode/LightDarkMode';
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator';

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

    {/* <TreeView menus={menus}/> */}

    {/* <QRCodeGenerator/> */}

    {/* <LightDarkMode/> */}

    <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />

    </div>
  )
}
export default App