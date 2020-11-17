import React, { useState } from 'react';

const Education = () => {

  const [education, setEducation] = useState({
    'school1': {
      name: 'School 1',
      location: 'Location 1',
      dates: '1/19 - Current',
      summary: 'School 1 summary - What have you done. Why was it great. What were the challenges'
    },
    'school2': {
      name: 'School 2',
      location: 'Location 2',
      dates: '1/18 - 1/19',
      summary: 'School 2 summary - What have you done. Why was it great. What were the challenges'
    }
  });

  const handleChange = (e) => {
    e.preventDefault();
    setEducation((prevState) => ({
      ...prevState,
      [e.target.dataset.school]: {
        name: e.target[0].value,
        location: e.target[1].value,
        dates: e.target[2].value,
        summary: e.target[3].value
      }
    }));
    hideEducationModal(e);
  };

  const showEducationModal = (e) => {
    const schoolListing = e.target.parentNode;
    schoolListing.classList.add('d-none');
    const educationModal = document.querySelector('#edu-mod-' + schoolListing.id);
    educationModal.classList.remove('d-none');
    educationModal.classList.add('d-block');
  };

  const hideEducationModal = (e) => {
    const educationModal = e.target;
    educationModal.classList.remove('d-block');
    educationModal.classList.add('d-none');

    const schoolListing = document.getElementById(educationModal.dataset.school)
    schoolListing.classList.remove('d-none');
  };

  const addNewSchool = () => {
    const newSchoolName = 'school' + (Object.keys(education).length + 1);
    setEducation((prevState) => ({
      ...prevState,
      [newSchoolName]: {}
    }));
    // Need to wait for element to be created
    setTimeout(() => {
      document.getElementById(newSchoolName).childNodes[1].click();
    }, 1);
  };

  const removeSchool = (e) => {
    const remainingSchools = Object.keys(education).map((key) => {
      if (e.target.parentNode.id !== key) {
        return education[key];
      }
    }).filter(a => a !== undefined);
    // Clear state
    setEducation({});
    // Iterate through remaining jobs and set in state
    remainingSchools.forEach((school, i) => {
      setEducation((prevState) => ({
        ...prevState,
        ['school' + i]: school
      }))
    });
  };

  return (
    <div>
      <button onClick={addNewSchool} className='add-btn position-absolute '>+</button>
      {Object.keys(education).map((key) => {
        const school = education[key];
        return (
          
          <div key={key}>
            <div className='row'>
              <div id={key} className='school col-sm p-2 border-bottom'>
                <button onClick={removeSchool} className='delete-btn float-right'>X</button>
                <button onClick={showEducationModal} className='edit-btn float-right'>&#9998;</button>
                <h5 className='name'>{school.name}</h5>
                <div className='location text-muted'>{school.location}</div>
                <div className='dates text-muted'>{school.dates}</div>
                <div className='summary'>{school.summary}</div>
              </div>
            </div>
            <form onSubmit={handleChange} data-school={key} id={'edu-mod-'+key} className='education-modal d-none'>
              <input className='col-12' placeholder='name' defaultValue={school.name} /><br/>
              <input className='col-12' placeholder='location' defaultValue={school.location} /><br/>
              <input className='col-12' placeholder='dates' defaultValue={school.dates} /><br/>
              <textarea className='col-12' placeholder='summary' defaultValue={school.summary} /><br/>
              <button id={key + '-submit'}>Submit</button>
            </form>
          </div>
        )
      })}
    </div>
        
  )
}

export default Education;