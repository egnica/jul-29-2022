
import Form from './Form/Form';
import List from './List/List';
import './App.css';
import { useState } from 'react';


const stringData = 'This is a string';

function App() {

  const [userSubmit, setUserSubmit] = useState({ person: [] });

  const SubmitHandler = (value) => {
      
      let personObject = userSubmit["person"];
      personObject.push(value);
      setUserSubmit({ person: personObject });
  }



  return (
    <div className="App">
      <Form stringTransfer = {stringData} objectTransfer = {SubmitHandler}/>

      {
        userSubmit.person.map(
          (item, index) => 
          <div key={index}>
            <p>{(index+1) +": "+item.name}</p>
            <p>{(index+1) +": "+item.age}</p>
            <p>{(index+1) +": "+item.years}</p>
          </div>
        )
      }
      <List objectTransfer = {userSubmit}/>
    </div>
  );
}

export default App;
