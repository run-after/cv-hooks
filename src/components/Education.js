import React, { useState, useEffect } from 'react';

const Education = (props) => {

  const [education, setEducation] = useState({
    'school1': {
      name: 'School 1',
      location: 'Location 1',
      dates: '1/19 - Current',
      summary: 'School 1 summary - What have you done. Why was it great. What were the challenges'
    }
  });

  return (
    <div className='container'>
      <h3 className='title text-center'>Education</h3>
      <div className='row'>
        <div className='job col-sm'>
          <h5 className='title'>{education.school1.name}</h5>
          <div className='location text-muted'>{education.school1.location}</div>
          <div className='dates text-muted'>{education.school1.dates}</div>
          <div className='description'>{education.school1.summary}</div>
        </div>
      </div>
    </div>
  )
}

export default Education;