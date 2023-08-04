import './App.css';
import HomePage from './pages/home-page/HomePage';
import LandingPage from './pages/landing-page/LandingPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavigationBar from './shared/navigation-bar/NavigationBar';
import CharactersPage from './pages/characters/CharactersPage';
import CharacterDetail from './pages/character-detail/CharacterDetail';

function App() {

  return (
    <div className='body'>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/playground" element={<HomePage />} />
          <Route exact path="/characters" element={<CharactersPage />} />
          <Route exact path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
