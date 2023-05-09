import ContextApp from './component/usecontext';
import RefApp from './component/useref';

function App() {
  return (
    <div>
      <h1>useContext</h1>
      <ContextApp />
      <h1>useRef</h1>
      <RefApp />
    </div>
  );
}

export default App;