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


function App() {
  return (
    <div>
      <Header />
      <Top />
      <Background>  
        <SpanBox />
        <Profile />
        <SpanBox />
        <Skill />
        <SpanBox />
        <Works />
        <SpanBox />
        <Contact />
        <SpanBox />        
        <Footer />
      </Background>
    </div>
  );
}

export default App;
