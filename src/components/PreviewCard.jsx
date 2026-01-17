import { useSettings } from '../context/SettingsContext.jsx';

const PreviewCard = () => {
  const { theme, language } = useSettings();
  
  const content = {
    en: "This is your preference preview.",
    th: "นี่คือหน้าตัวอย่างการตั้งค่า"
  };

  return (
    <div className="card">
      <p><strong>Theme:</strong> {theme}</p>
      <p><strong>Language:</strong> {language}</p>
      <p>{content[language]}</p>
    </div>
  );
};

export default PreviewCard;