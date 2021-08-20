import { useContext } from 'react';
import UserContextProvider, { UserContext } from './Context';
import Screen from './Screen';

function App() {
  return (
    <UserContextProvider >
          <Screen />
    </UserContextProvider >
  );
}

export default App;
