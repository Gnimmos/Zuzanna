import logo from './gifffff.gif';
import hi from './hi.gif'
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import song from './song.mp3'
import theend from './theend.jpg'
import space from './space.jpg'
import toopink from './toopink.jpg' 
import spacee from './spacee.jpg'
import {  Row, Col, Container } from 'react-bootstrap';
import Media from 'react-bootstrap/Media';

function App() {
  return (
    <div className="App">
            <Container fluid="lg">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <div className="textup">
       <ReactAudioPlayer
  src={song}
  autoPlay
  loop
/>
        <p>
          Hello U!
        </p>
        <hr></hr>
        <img src={hi} />
        <hr></hr>
       
        <pre>{`
         The orbs, the milky-ways, the circling worlds;
         Now bright, sublime,
         In clusters shine
         The stars divine.
         And 'cross the twinkling void the meteor whirls.
        `}</pre>
                <hr></hr>

        <br> 
        
        </br>
      
        </div>
      </div>
      <Container fluid="lg">

      <Row>
        <Col md={12}>
      <iframe className="dino" src="https://chromedino.com/" frameborder="0" scrolling="no" width="100%" height="100%" loading="lazy"></iframe> 
      </Col>   
      </Row>
      <Row className="positionthem" md={4} >      
     
                           
                                  <Col md={4} >
                                 <Media>
                                      <Media.Body>
                                      <img
                                        width={300}
                                        height={300}
                                        className="ml-3"
                                        src={toopink}
                                        alt="Generic placeholder"
                                      />

                                        <h5>Manifesto</h5>

                                        <h5 className="names">VAGGELIS</h5>
                                      
                                      </Media.Body>

                                    </Media> 
                                  </Col>

                                  <Col md={4} >
                                      <Media>
                                      <Media.Body>
                                      <img
                                        width={300}
                                        height={300}
                                        className="ml-3"
                                        src={spacee}
                                        alt="Generic placeholder"
                                      />

                                        <h5>Ola zen</h5>
                                        <h5 className="names">KYRIACOS</h5>

                                      </Media.Body>

                                    </Media>  
                                  </Col>
                             </Row>   
                             </Container>
      <div>
        <img className="George" src={theend}></img>
      </div>
      </Container>

    </div>
  );
}

export default App;
