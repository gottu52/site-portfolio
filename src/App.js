import './App.css';
import { Header } from './components/molecules/Header';
import { Top } from './components/molecules/Top';
import { SpanBox } from './components/attoms/SpanBox';
import { Background } from './components/template/Background';
import { Profile } from './components/molecules/Profile';

function App() {
  return (
    <div>
      <Header />
      <Top />
      <Background>  
        <SpanBox />
        <Profile />
      </Background>
    </div>
  );
}

export default App;
