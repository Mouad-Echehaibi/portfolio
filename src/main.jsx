import ReactDOM from 'react-dom/client';  
import App from '@/config/App';  
import '@/provider/i18n';
import { getTheme, setTheme } from "@/provider/theme";
import '@/style/main.css'
import '@/style/hero.css'
import '@/style/B3.css'

setTheme(getTheme());

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(<App />)