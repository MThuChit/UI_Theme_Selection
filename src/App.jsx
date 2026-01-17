import { useSettings } from './context/SettingsContext';
import Header from './components/Header';
import SettingsPanel from './components/SettingsPanel';
import PreviewCard from './components/PreviewCard';
import './App.css';
import './index.css';

function App() {
  const { theme } = useSettings();

  return (
    <div className={`app-wrapper ${theme}`}>
      <div className="container">
        <Header />
        <div className="main-content">
          <SettingsPanel />
          <PreviewCard />
        </div>
      </div>
    </div>
  );
}

export default App;