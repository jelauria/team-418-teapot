import './App.css';
import 'tachyons';
import Main from './components/Main';
import AccessibleCaptcha from './components/Captcha/AccessibleCaptcha';

function App() {
  return (
    <div className="App">
      <Main />
      <AccessibleCaptcha className="v-mid" />
    </div>
  );
}

export default App;
