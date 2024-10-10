// imports from react, react-router-dom, client/src/interfaces/WorkData.tsx, and client/src/api/workAPI.tsx
import { useState, useEffect, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { WorkData } from "../interfaces/WorkData";
import { deleteWork, retrieveWorks } from "../api/workAPI";

// the mainPage component is a functional component that uses react hooks to manage the state updates as needed to manage the state variables
const MainPage = () => {
  const [ workArray, setWorkArray ] = useState<WorkData[]>([]);
  const [ dataCheck, setDataCheck ] = useState(true);

  //fetchwork is an async function that retrieves the work data from the api and updates state
  const fetchWork = async () => {
    try {
      const data = await retrieveWorks();
      setWorkArray(data);
    } catch (err) {
      console.error('Failed to retrieve work:', err);
    }
  };

  // monitors the dataCheck state variable and fetches the work data if the dataCheck is true
  // runs when dataCheck changes
  useEffect(() => {
    if(dataCheck) {
      fetchWork();
    } else {
      setDataCheck(false);
    }
  }, [dataCheck]);

  // handleDelete is an async function that deletes the work data from the api and updates state
  const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const workId = Number(event.currentTarget.value);
    if (!isNaN(workId)) {
      try {
        const data = await deleteWork(workId);
        fetchWork();
        return data;
      } catch (error) {
        console.error('Failed to delete ticket:', error);
      }
    }
  };

// this renders a list of work items and provides buttons to edit or delete the work items and links for navagating to 
// different routes
// It dynamically generates the list   
  return (
    <div className="main-list">
      <div>
        <Link to='/show-volunteers'>Click here to see Volunteers!</Link>
      </div>
      {dataCheck ? (
        <div className="work-list">
          {workArray.map((work) => (
            <div key={work.id} className='work-details'>
              <h3>{work.name}</h3>
              <h4>{work.status}</h4>
              <div>{work.description}</div>
              <div>{work.assignedVolunteer?.volunteerName}</div>
              <Link to={'/edit-work'} state={{id: work.id}}>
                <button>Edit</button>
              </Link>
              <button 
                value={String(work.id)}
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          No volunteer work available!
        </div>
      )
    }
    </div>
  )
};

export default MainPage;
