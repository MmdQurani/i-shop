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
import Carts from "./Pages/Carts/Carts";
import Login from "./Pages/Login/Login";
import NotPage from "./Pages/NotPage/NotPage";

const RoutesValue = [
  {path : '/' , element : <Home></Home>},
  {path : '/shop' , element : <Category></Category>},
  {path : '/product' , element : <Product></Product>},
  {path : '/unproduct' , element : <PrUnavailable></PrUnavailable>},
  {path : '/offers' , element : <Offers></Offers>},
  {path : '/blogs' , element : <Blogs></Blogs>},
  {path : '/blog' , element : <Blog></Blog>},
  {path : '/faqs' , element : <Faqs></Faqs>},
  {path : '/contact-us' , element : <ContactUs></ContactUs>},
  {path : '/about-us' , element : <AboutUs></AboutUs>},
  {path : '/carts' , element : <Carts></Carts>},
  {path : '/login' , element : <Login></Login>},
  {path : '*' , element : <NotPage></NotPage>}
];

export default RoutesValue;