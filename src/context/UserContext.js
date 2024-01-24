import React from "react";
import { createContext } from "react";

//like other hooks like useState and useEffect here it is used and assigned to constant vairable UserContext
const UserContext = createContext();

//here the UserContext is exported
// Now this UserContext is a Provider, Means all the components are wrapped inside this Provider so they have Access to the usercontext
export default UserContext;
