import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onSubmit = () => {
    if (firstname === '' || lastname === '') {
      M.toast({
        html: 'firstname and lastname are required fields',
        classes: 'rounded',
      });
    } else {
      console.log(firstname, lastname);
      setFirstname('');
      setLastname('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h5>Add new technician</h5>

        {/* firstname row  */}
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstname'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor='firstname' className='active'>
              Firstname
            </label>
          </div>
        </div>

        {/* lastname row  */}
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastname'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor='lastname' className='active'>
              Lastname
            </label>
          </div>
        </div>

        {/* Modal footer */}
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect blue btn'
            style={{
              minWidth: '30%',
              borderRadius: '100px',
              marginRight: '1rem',
            }}
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '45%',
};

export default AddTechModal;
