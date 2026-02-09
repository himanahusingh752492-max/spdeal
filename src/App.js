//import logo from './logo.svg';
import './App.css';
import Header from './fooder';
import Footer from './header';
import Collection from './collection'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Body from './body';
import {blog} from './blog';
import { Card, Container,Row,Col,Button } from "react-bootstrap";
function App() {

  return (
    <div>
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
  
  );
}

export default App;
