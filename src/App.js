import React from 'react';
import './App.css';
import UserTable from './Components/usersTableComponent'
import ProjectTable from './Components/projectsTableComponent'
import Form from './Components/FormComponent'

function App() {
  return (
    <div className="App">
      <h1>My React</h1>
      <UserTable />
      <Form 
        documentFields = {{
          eID: '',
          name: '',
          preferredName: '',
          position: '',
          icNumber: '',
          email: '',
          phoneNumber: '',
          birthday: '',
          immediateUpline: '',
          referrer: '',
          location: '',
          updated: ''
        }}
        collection="users"
      />
      <ProjectTable />
      <Form 
        documentFields = {{
          eID : '',
          name : '',
          location : '',
          updated : ''
        }}
        collection="projects"
      />
      <Form 
        documentFields = {{
          name: '',
          comm: '',
          effectiveDate: ''
        }}
        collection = "commissionStructure"
        />
    </div>
  );
}

export default App;
