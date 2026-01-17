// src/App.jsx
import { useSettings } from './context/SettingsContext';
import Header from './components/Header';
import SettingsPanel from './components/SettingsPanel';
import PreviewCard from './components/PreviewCard';
import './App.css';

function App() {
  const { theme } = useSettings();

  return (
    <div className={`app-wrapper ${theme}`}>
      <Header />
      <div className="main-content">
        <SettingsPanel />
        <PreviewCard />
      </div>
    </div>
  );
}

export default App; // Fixes the terminal error