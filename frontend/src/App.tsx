// import BlogDetails from "./components/BlogDetails";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

// interface Routes{
//   exact: string,

// }

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          {/* <Switch> */}
            {/* <Route exact path="/"> */}
              <Home />
            {/* </Route> */}
            {/* <Route path="/blog-details/:id"> */}
              {/* <BlogDetails /> */}
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
