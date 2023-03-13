import React, { useReducer,createContext } from 'react';
import './App.css';
// import Todo from './Components/Todo';
import User from './Components/User';
import { initialState ,reducer,actionType} from './reducer';

type contextCity={
  state:typeof initialState,
  dispatch:React.Dispatch<actionType>
}

export const UserContext=createContext({}as contextCity)

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
return (
  <UserContext.Provider value={{state,dispatch}}>
      <User/>

</UserContext.Provider>
  );
}
export default App;




