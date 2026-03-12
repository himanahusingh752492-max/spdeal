
import React,{useState,useContext, createContext} from 'react';
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
import ProfilePageDark from './profile'
import SearchPage from './search';
import ProtectedRoute  from './ProtectedRoute'; 
export const MyContext=createContext()

function App() {
  const [name,setname]=useState('User')
  const [password,setpassword]=useState('')
    const [email,setemail]=useState('')
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
  path: "*",
  element: (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>404 - Page Not Found 😅</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/home">Go back Home</a>
    </div>
  ),
},


  {
    path: "/review",
    element: (
      <ProtectedRoute>
      <Review/>
      </ProtectedRoute>)
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
      <ProfilePageDark/>
      </ProtectedRoute>)
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
    element: (
      
    <Register/>
   )
  },
{
  path: "/phones",
  element: (
    <ProtectedRoute>
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
    </ProtectedRoute>
  ),
},
{
  path: "/laptops",
  element: (
    <ProtectedRoute>
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
    </ProtectedRoute>
  ),
},
{
  path: "/tv",
  element: (
    <ProtectedRoute>
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
    </ProtectedRoute>
  ),
},
{
  path: "/ac",
  element: (
    <ProtectedRoute>
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
    </ProtectedRoute>
  ),
},
{
  path: "/electronics",
  element: (
    <ProtectedRoute>
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
    </ProtectedRoute>
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
    element: (<ProtectedRoute><Contact/></ProtectedRoute>)

  },
  {
  }
]);
  return (
   < MyContext.Provider value ={{name,setname ,password,setpassword,email,setemail}} >
    <RouterProvider router={router} />
    </MyContext.Provider>

  
  );
}

export default App;
