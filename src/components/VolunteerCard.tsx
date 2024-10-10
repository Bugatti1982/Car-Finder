//++++++++++++ WE NEED TO RENAME THESE FILES TO MATCH THE CODE ++++++++++++++
// imports from the client folder/interfaces/ApiMessage.tsx so we need to look at that file and what it connects to
// Is this the One that we look to for renaming and copying from the server/src/models/car.ts file names?
//


// the link allows for navigation on website without page refresh
//used for navigation on the website
import { Link } from "react-router-dom";
// imports from the client folder/interfaces folder/ApiMessage.tsx
// used for typechecking api messages
import {ApiMessage } from '../interfaces/ApiMessage'
// imports from react for mouse events
// used for typechecking mouse events
import { MouseEventHandler } from "react";

interface VolunteerCardProps {
  // identifys the volunteer id
  id: number | null,
  // identifys the volunteer name
  name: string | null,
  // deletes the volunteer from the database
  deleteIndvVolunteer: (ticketId: number) => Promise<ApiMessage>
}

const VolunteerCard = ({id, name, deleteIndvVolunteer}:VolunteerCardProps) => {

  const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const volunteerId = Number(event.currentTarget.value);
    if (!isNaN(volunteerId)) {
      try {
        const data = await deleteIndvVolunteer(volunteerId);
        return data;
      } catch (error) {
        console.error('Failed to delete ticket:', error);
      }
    }
  };

  return (
    <div className='v-card'>
      <h3>Volunteer ID: {id} </h3>
      <h4>Volunteer Name: {name}</h4>
      <button>
        <Link to="/edit-volunteer" state={{id: id}}>Edit</Link>
      </button>
      <button value={String(id)} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default VolunteerCard;
