import WebApp from '@twa-dev/sdk';
import './App.css';
function App() {

  return (
    <>
      <div id="mapid">
        <h1>Hello W!</h1>
      </div>
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count`)}>
          Show Alert
        </button>
      </div>
    </>
  )
}

export default App
