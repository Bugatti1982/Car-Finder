// ############## NEED TO RENAME AND CONNECT TO CORRECT FILES ################
//  client/src/interfaces/Volunteerdata.tsx and change it here when we change that name
// IS this where we change the names of the files to match the server/src/models/car.ts file names?
// 


// code imports from the VolunteerData.tsx file and exports to the WorkData.tsx file in the client/src/interfaces folder
import { VolunteerData } from "./VolunteerData";

// code exports the WorkData interface  What do we change this to?
// since it is pulling from the volunteer data this is dependant on how we rename in those files
// Do we change the names of the files to match the server/src/models/car.ts file names?
// this file connects to all WorkData.tsx files and enforces
// the structure of the object that contains the data for the work
export interface WorkData {
  id: number | null;
  name: string | null;
  description: string | null;
  status: string | null;
  assignedVolunteerId: number | null;
  assignedVolunteer: VolunteerData | null;
}
