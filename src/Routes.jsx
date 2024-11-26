import Home from "./Pages/Home/Home";
import NotPage from "./Pages/NotPage/NotPage";

const RoutesValue = [
  {path : '/' , element : <Home></Home>},
  {path : '*' , element : <NotPage></NotPage>}
];

export default RoutesValue;