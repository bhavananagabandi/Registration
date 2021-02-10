import { BrowserRouter as Router } from 'react-router-dom';
import RouterContainer from './components/RouterContainer';

function App() {
  return (
    <div className="App">
     <Router>
        <RouterContainer />
      </Router>
    </div>
  );
}

export default App;
