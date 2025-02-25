import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Product/Product";
import PrUnavailable from "./Pages/PrUnavailable/PrUnavailable";
import Offers from "./Pages/Offers/Offers";
import Blogs from "./Pages/Blogs/Blogs";
import Blog from "./Pages/Blog/Blog";
import Faqs from "./Pages/Faqs/Faqs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Cards from "./Pages/Cards/Cards";
import Login from "./Pages/Login/Login";
import NotPage from "./Pages/NotPage/NotPage";
import ReviewProduct from "./Component/ReviewProduct/ReviewProduct";
import TechnicalSpecifications from "./Component/TechnicalSpecifications/TechnicalSpecifications";
import UserComments from "./Component/UserComments/UserComments";
import Question from "./Component/Question/Question";

const RoutesValue = [
  {path : '/' , element : <Home></Home>},
  {path : '/shop' , element : <Category></Category>},
  {path : '/product/:productParams' , element : <Product></Product> , children:[
    {path : 'ReviewProduct' , element:<ReviewProduct></ReviewProduct>},
    {path : 'TechnicalSpecifications' , element:<TechnicalSpecifications></TechnicalSpecifications>},
    {path : 'UserComments' , element:<UserComments></UserComments>},
    {path : 'Question' , element:<Question></Question>},
  ]},
  {path : '/unproduct' , element : <PrUnavailable></PrUnavailable>},
  {path : '/offers' , element : <Offers></Offers>},
  {path : '/blogs' , element : <Blogs></Blogs>},
  {path : '/blog' , element : <Blog></Blog>},
  {path : '/faqs' , element : <Faqs></Faqs>},
  {path : '/contact-us' , element : <ContactUs></ContactUs>},
  {path : '/about-us' , element : <AboutUs></AboutUs>},
  {path : '/cards' , element : <Cards></Cards>},
  {path : '/login' , element : <Login></Login>},
  {path : '*' , element : <NotPage></NotPage>}
];

export default RoutesValue;