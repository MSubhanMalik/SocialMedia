import { Route, Routes } from "react-router";
import Primary from "./Pages/Primary";
import Home from "./Pages/Home";
import routes from "./routes.jsx";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        return <Route index = {index} path={route.path} element={<Primary element={route.element} />} />;
      })}
    </Routes>
  );
}

export default App;
