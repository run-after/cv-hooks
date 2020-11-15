import React, { useState, useEffect } from 'react';

const Practical = () => {

  const [practical, setPractical] = useState({
    'job1': {
      title: 'Job 1',
      location: 'Location 1',
      dates: '1/19 - Current',
      description: 'Job 1 description - What have you done. Why was it great. What were the challenges'
    },
    'job2': {
      title: 'Job 2',
      location: 'Location 2',
      dates: '1/19 - Current',
      description: 'Job 2 description - What have you done. Why was it great. What were the challenges'
    }
  });
  
  
    const handleChange = (e) => {
      e.preventDefault();
      setPractical((prevState) => ({
        ...prevState,
        [e.target.id]: {
          title: e.target[0].value,
          location: e.target[1].value,
          dates: e.target[2].value,
          description: e.target[3].value
        }
      }));
      hidePracticalModal(e);
    };

  const showPracticalModal = (e) => {
    const job = e.target.parentNode;
    job.classList.add('d-none');
    const practicalModal = document.querySelector('#prac-mod-'+job.id);
    practicalModal.classList.remove('d-none');
    practicalModal.classList.add('d-block');
  };

  const hidePracticalModal = (e) => {
    e.target.classList.remove('d-block');
    e.target.classList.add('d-none');
  }


  // Working... Need to clean up the 2nd return below
  // then use useEffect to change the state of job

  return (
    <div>{/*1*/}
      <div id='practical' className='container'>{/*2*/}
        <h3 className='title text-center'>Experience</h3>
        
        {Object.keys(practical).map((key) => {
          const job = practical[key];
          return (//This might be a function (displayJobsInState)?
            
            <div key={key}>
              <div className='row'>
                <div id={key} className='job col-sm p-2 border-bottom'>
                  <button onClick={showPracticalModal} className='edit-btn float-right'>&#9998;</button>
                  <h5 className='title'>{job.title}</h5>
                  <div className='location text-muted'>{job.location}</div>
                  <div className='dates text-muted'>{job.dates}</div>
                  <div className='description'>{job.description}</div>
                </div>
              </div>
              <form onSubmit={handleChange } id={'prac-mod-'+key} className='practical-modal d-none'>
                <input className='col-12' placeholder='title' defaultValue={job.title} /><br/>
                <input className='col-12' placeholder='location' defaultValue={job.location} /><br/>
                <input className='col-12' placeholder='dates' defaultValue={job.dates} /><br/>
                <textarea className='col-12' placeholder='description' defaultValue={job.description} /><br/>
                <button id={key + '-submit'}>Submit</button>
              </form>
            </div>
          )
        })}
      </div>{/*2 */}
      
      
    </div>//1
        
  )
  
}

export default Practical;