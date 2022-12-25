import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import About from './components/body/about';
import Home from './components/body/highlights';
import Work from './components/body/work';
import Projects from './components/body/projects';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ParticleBackground from './ParticleBackground';

class App extends React.Component {
  render() {
      return (

        <div className="App" style={{backgroundColor: '#202549', margin:-8}}>        
          <ParticleBackground/>
          <div >
            <Header></Header>
            {/* <Switch>
              <Route exact path="" element={<Home/>}> */}
                <Home/>
              {/* </Route>
              <Route path="/about" element={<About/>}>
                <About/>
              </Route>
              <Route path="/projects" element={<Projects/>}>
                <Projects/>
              </Route>
              <Route path="/Work" element={<Work/>}>
                <Work/>
              </Route>
            </Switch> */}
            </div>
            <Footer></Footer>
          </div>
            );
  }
}

export default App;