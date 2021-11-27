
import './App.css';
import Bar from './parts/NavBar'
import NewGenerate from './parts/NewGenerate';
const url = document.url;
var items;
function App() {
  return (
    <>
      <Bar/>
      <NewGenerate/>
    </>
  );
}


export default App;
