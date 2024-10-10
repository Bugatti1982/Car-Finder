// This page imports from React, react-router-dom, and 
// Client/src/interface/WorkData.tsx and the Client/src/api/workAPI.tsx

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WorkData } from "../interfaces/WorkData";
import { retrieveWork, updateWork } from "../api/workAPI";

// This function allows the user to edit the work based on the work id
// since we only have one car could this be car 2?  
// Must change names to connect
// Fetches data based on ID updates data based on the state error logs it
const EditWork = () => {
  const [work, setWork] = useState<WorkData | undefined>();

  const navigate = useNavigate();
  const { state } = useLocation();

  const fetchWork = async (workId: WorkData) => {
    try {
      const data = await retrieveWork(workId.id);
      setWork(data);
    } catch (err) {
      console.error('Failed to retrieve ticket:', err);
    }
  }
 // if this involves any subscriptions or async ops we need to handle cleanup to avoid memory leaks
  useEffect(() => {
    fetchWork(state);
  }, []);

  // this function handles the submitting of the form and updates the work id
  // prevents the default form behavior updates by api call & navigates to home page if datas invalid error message
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (work && work.id !== null){
      updateWork(work.id, work);
      navigate('/');
    }
    else{
      console.error('Ticket data is undefined.');
    }
  }
// event handler that updates the state of the work whenever the input changes/element changes 
// sets to undefined when previous state does not exist
  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setWork((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  //handle change function is handler for input or select elements
  // keeps the components state in sync with input elements
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setWork((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  //renders form for editing work info
  // form can be altered here
  // uses the event handlers  the form fields are controlled components updates as user interacts with them
  return (
    <>
      <div className='form-container'>
        {
          work ? (
            <form className='form' onSubmit={handleSubmit}>
              <h1>Edit Work</h1>
              <label htmlFor='tName'>Work Name</label>
              <textarea
                id='tName'
                name='name'
                value={work.name || ''}
                onChange={handleTextAreaChange}
                />
              <label htmlFor='tStatus'>Work Status</label>
              <select
                name='status'
                id='tStatus'
                value={work.status || ''}
                onChange={handleChange}
              >
                <option  value='Todo'>Todo</option>
                <option  value='In Progress'>In Progress</option>
                <option  value='Done'>Done</option>
            </select>
            <label htmlFor='tDescription'>Work Description</label>
              <textarea
                id='tDescription'
                name='description'
                value={work.description || ''}
                onChange={handleTextAreaChange}
              />
              <button type='submit'>Submit Form</button>
            </form>
          ) : (
            <div>Issues fetching Work to Edit</div>
          )
        }
      </div>  
    </>
  )
};

export default EditWork;
