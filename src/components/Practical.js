import React, { useState } from 'react';

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
      [e.target.dataset.job]: {
        title: e.target[0].value,
        location: e.target[1].value,
        dates: e.target[2].value,
        description: e.target[3].value
      }
    }));
    hidePracticalModal(e);
  };

  const showPracticalModal = (e) => {
    const jobListing = e.target.parentNode;
    jobListing.classList.add('d-none');
    const practicalModal = document.querySelector('#prac-mod-' + jobListing.id);
    practicalModal.classList.remove('d-none');
    practicalModal.classList.add('d-block');
  };

  const hidePracticalModal = (e) => {
    const practicalModal = e.target;
    practicalModal.classList.remove('d-block');
    practicalModal.classList.add('d-none');

    const jobListing = document.getElementById(practicalModal.dataset.job)
    jobListing.classList.remove('d-none');
  }

  return (
    <div>
      <div id='practical' className='container'>
        <h3 className='title text-center'>Experience</h3>
        
        {Object.keys(practical).map((key) => {
          const job = practical[key];
          return (
            
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
              <form onSubmit={handleChange } data-job={key} id={'prac-mod-'+key} className='practical-modal d-none'>
                <input className='col-12' placeholder='title' defaultValue={job.title} /><br/>
                <input className='col-12' placeholder='location' defaultValue={job.location} /><br/>
                <input className='col-12' placeholder='dates' defaultValue={job.dates} /><br/>
                <textarea className='col-12' placeholder='description' defaultValue={job.description} /><br/>
                <button id={key + '-submit'}>Submit</button>
              </form>
            </div>
          )
        })}
      </div>
      
      
    </div>
        
  )
  
}

export default Practical;

//useEffect is everything that's not user-interaction based like API requests on load