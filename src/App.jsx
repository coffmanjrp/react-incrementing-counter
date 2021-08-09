import Counter from './components/Counter';
import counterData from './utils/counterData';
import './App.scss';

function App() {
  return (
    <div className="App">
      {counterData.length > 0 &&
        counterData.map((data) => <Counter key={data.id} data={data} />)}
    </div>
  );
}

export default App;
