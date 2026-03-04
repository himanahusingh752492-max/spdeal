//import logo from './logo.svg';
import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import './App.css';
import Header from './fooder';
import Footer from './header';
import Collection from './collection'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Body from './body';
import {blog} from './blog';
import { Card, Container,Row,Col,Button } from "react-bootstrap";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Review from './review';
import Login from './login';
import Register from './register';
import Contact from './contact';
// import SearchPage from "./SearchPage";
import SearchPage from './search';
  

function App() {
const router = createBrowserRouter([


  {
    path: "/home",
    element: (  <div>
     <div className="App">
    <Header/>
    </div>

     <div className="upperbody">
   <Collection/>

<Container fluid className='body'>
  <Container>
    <Row>
      {blog.map((v, i) => (
        <Body pitem={v} key={i} />
      ))}
    </Row>
  </Container>
</Container>
 
    </div>
  <div className="Footer">
   <Footer/>
    </div>
    
</div>
  ),
  },

  {
    path: "/review",
    element: <Review/>,
  },
  {
    path: "/body",
    element: <Body/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path:"/register",
    element: <Register/>
  },
{
  path: "/phones",
  element: (
    <div>
      <div className="App">
        <Header />
      </div>

      <p className="phonediv">Phones -</p>

      <div className="upperbody">
        {/* <Collection /> */}

        <Container fluid className="body">
          <Container>
            <Row>
              {blog
  .filter((v) => v.name === "phone")
  .map((v, i) => (
    <Body pitem={v} key={i} />
  ))}
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  ),
},
{
  path: "/laptops",
  element: (
    <div>
      <div className="App">
        <Header />
      </div>

      <p className="phonediv">laptops -</p>

      <div className="upperbody">
        {/* <Collection /> */}

        <Container fluid className="body">
          <Container>
            <Row>
              {blog
  .filter((v) => v.name === "laptop")
  .map((v, i) => (
    <Body pitem={v} key={i} />
  ))}
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  ),
},
{
  path: "/tv",
  element: (
    <div>
      <div className="App">
        <Header />
      </div>

      <p className="phonediv">TV -</p>

      <div className="upperbody">
        {/* <Collection /> */}

        <Container fluid className="body">
          <Container>
            <Row>
              {blog
  .filter((v) => v.name === "/tv")
  .map((v, i) => (
    <Body pitem={v} key={i} />
  ))}
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  ),
},
{
  path: "/ac",
  element: (
    <div>
      <div className="App">
        <Header />
      </div>

      <p className="phonediv">Air Conditioner -</p>

      <div className="upperbody">
        {/* <Collection /> */}

        <Container fluid className="body">
          <Container>
            <Row>
              {blog
  .filter((v) => v.name === "AirConditioner")
  .map((v, i) => (
    <Body pitem={v} key={i} />
  ))}
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  ),
},
{
  path: "/electronics",
  element: (
    <div>
      <div className="App">
        <Header />
      </div>

      <p className="phonediv">electronics -</p>

      <div className="upperbody">
        {/* <Collection /> */}

        <Container fluid className="body">
          <Container>
            <Row>
              {blog
  .filter((v) => v.name === "electronics")
  .map((v, i) => (
    <Body pitem={v} key={i} />
  ))}
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  ),
},
{
    path: "/search",
    element: (
    <div>
      <div className="App">
        <Header />
      </div>

      <p className="phonediv">Search -</p>

    
        {/* <Collection /> */}

<SearchPage/>
</div>

),
  },


  {
    path:"/contact",
    element: <Contact/>

  },
  {
  }
]);
  return (
    <RouterProvider router={router} />
    
//     <div>
//      <div className="App">
//     <Header/>
//     </div>

//      <div className="upperbody">
//    <Collection/>

// <Container fluid className='body'>
//   <Container>
//     <Row>
//       {blog.map((v, i) => (
//         <Body pitem={v} key={i} />
//       ))}
//     </Row>
//   </Container>
// </Container>
 
//     </div>
//   <div className="Footer">
//    <Footer/>
//     </div>
    
// </div>
  
  );
}

export default App;
