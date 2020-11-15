import React, { useState, useEffect } from 'react';

const General = () => {

  const [general, setGeneral] = useState({
    name: 'John Doe',
    email: 'example@example.com',
    phone: '555-555-5555'
  });
  useEffect(() => {
    const handleChange = (e) => {
      e.preventDefault();
      setGeneral({
        name: e.target.parentNode[0].value,
        email: e.target.parentNode[1].value,
        phone: e.target.parentNode[2].value
      });
      hideGeneralModal();
    };
    
    document.getElementById('gen-submit').addEventListener('click', handleChange);

    return () => {
      document.getElementById('gen-submit').removeEventListener('click', handleChange);
    }
  }, [general]);

  const showGeneralModal = () => {
    const gen = document.getElementById('general');
    gen.classList.remove('d-block');
    gen.classList.add('d-none');
    const generalModal = document.getElementsByClassName('gen-modal');
    generalModal[0].classList.add('d-block', 'justify-content-center')
  };

  const hideGeneralModal = () => {
    const generalModal = document.getElementsByClassName('gen-modal');
    generalModal[0].classList.remove('d-block', 'justify-content-center');
    const gen = document.getElementById('general');
    gen.classList.add('d-block');
  };

  return (
    <div>
      <div id='general'>
        <button onClick={showGeneralModal} className='edit-btn float-right'>&#9998;</button>
        <h1 id='gen-name' className='text-center'>{general.name}</h1>
        <div className='text-center'>
          <span className='p-3'>{general.email}</span>
          <span className='p-3'>{general.phone}</span>
        </div>
      </div>
      <form className='gen-modal d-none text-center'>
        <input className='form-control-lg' placeholder='name' defaultValue={general.name}></input><br />
        <input placeholder='email' defaultValue={general.email}></input>
        <input placeholder='phone' defaultValue={general.phone}></input><br />
        <button id='gen-submit'>Submit</button>
      </form>
    </div>
    
  );
};

export default General;