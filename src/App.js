import './App.css';
import { Header } from './components/molecules/Header';
import { Top } from './components/molecules/Top';
import { SpanBox } from './components/attoms/SpanBox';
import { Background } from './components/template/Background';
import { Profile } from './components/molecules/Profile';
import { Skill } from './components/molecules/Skill';
import { Works } from './components/molecules/Works';
import { Contact } from './components/molecules/Contact';
import { Footer } from './components/molecules/Footer';
import { AnimationWrapper } from './components/attoms/AnimationWrapper';

function App() {
  return (
    <div>
      <Header />
        <AnimationWrapper >
          <Top />
          <Background>  
            <SpanBox id="profile"/>
            <Profile />
            <SpanBox id="skill"/>
            <Skill />
            <SpanBox id="works"/>
            <Works />
            <SpanBox id="contact"/>
            <Contact />
            <SpanBox />        
            <Footer />
          </Background>
        </AnimationWrapper>
      </div>
  );
}

export default App;
