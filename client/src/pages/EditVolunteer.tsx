// This page imports from React, react-router-dom, and the Client/interfacesfolder/VolunteerData.tsx and the Client/apifolder/volunteerAPI.tsx
// 

// imports from react for useState, useEffect, FormEvent, ChangeEvent
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
// imports from react-router-dom for useLocation and useNavigate
import { useLocation, useNavigate } from 'react-router-dom';
// imports from the Client/api folder for updateVolunteers and retrieveVolunteer
import { updateVolunteers, retrieveVolunteer } from '../api/volunteerAPI';
import { VolunteerData } from '../interfaces/VolunteerData';

// this is the function that allows the user to edit the volunteer, bases it off user id
// How do we make it conform to the car model?
const EditVolunteer = () => {
  const [volunteer, setVolunteer] = useState<VolunteerData | undefined>();

  const navigate = useNavigate();
  const { state } = useLocation();

  const fetchVolunteer = async (volunteerId: VolunteerData) => {
    try {
      const data = await retrieveVolunteer(volunteerId.id);
      // set volunteer updates the state of the volunteer
      setVolunteer(data);
    } catch (err) {
      console.error('Failed to retrieve ticket:', err);
    }
  }
// fetches the data, only once, if their is a dependancy added it will fetch the data again but we would have to add that dependancy
  useEffect(() => {
    fetchVolunteer(state);
  }, []);

  // this function handles the submitting of the form and updates the volunteer
  // can we use this to update the car?
  // this also prevents default form submission behavior crucial in single page applications but do we need it? you use it in React doesnt cause page reload everytime
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // conditional check to see if the volunteer is not null
    // could we use this to see if person is done entering vehicles/data?
    if (volunteer && volunteer.id !== null){
      updateVolunteers(volunteer.id, volunteer);
       // if they are done entering data, it will navigate to the home page
      navigate('/');
    }
    // else error message Can we change this to do you want to add another vehicle?
    else{
      console.error('Ticket data is undefined.');
    }
  }
  // this function takes the event and type parameter... this specifies it can come from either input or select element
  // this is an event handler that updates the state of the volunteer whenever the input changes/element changes
  // it extracts the name/value from the target and sets the volunteer state
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVolunteer((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  //renders form for editing volunteer info
  // has event handlers to manage form submission and input changes
  return (
    <>
      <div className='form-container'>
        {
          volunteer ? (
            <form className='form' onSubmit={handleSubmit}>
              <h1>Edit Volunteer</h1>
              <label htmlFor='tName'>Volunteer Name</label>
              <input
                id='tName'
                name='volunteerName'
                value={volunteer.volunteerName || ''}
                onChange={handleChange}
                />
              <button type='submit'>Update</button>
            </form>
          ) : (
            <div>Issues fetching ticket</div>
          )
        }
      </div>  
    </>
  );
};

// exports the EditVolunteer component as the default export from the module
// this allows for other modules to import it
export default EditVolunteer;
