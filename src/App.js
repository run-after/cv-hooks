import General from './components/General';
import Practical from './components/Practical';
import Education from './components/Education';

const App = () => {
  
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <General />
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <Practical />
          </li>
          <li className='list-group-item'>
            <Education />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;