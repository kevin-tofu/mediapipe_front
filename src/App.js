// import logo from './logo.svg';
import './App.css';
import ImageHandler from './components/imagehandler/ImageHandler'
import { URL_HOST, API_POST, TITLE, DIALOG_TITLE, DIALOG_TEXTCONTENT } from './config'

function App() {
  return (
    <div className="App">
      <ImageHandler url_host={URL_HOST} api_post={API_POST} 
                    title={TITLE} 
                    dialog_title = {DIALOG_TITLE} dialog_textcontent={DIALOG_TEXTCONTENT}
      />
    </div>
  );
}

export default App;
