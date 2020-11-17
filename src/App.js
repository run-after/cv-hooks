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
            <div id='practical' className='container'>
              <h3 className='title text-center'>Experience</h3>
              <Practical />
            </div>
          </li>
          <li className='list-group-item'>
            <div id='education' className='container'>
              <h3 className='title text-center'>Education</h3>
              <Education />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;