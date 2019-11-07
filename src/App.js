import React from 'react';
import './App.css';
import UserTable from './Components/usersTableComponent'
import ProjectTable from './Components/projectsTableComponent'
import UserForm from './Components/usersFormComponent'
import Form from './Components/FormComponent'
import ProjectForm from './Components/projectsFormComponent'


function App() {
  return (
    <div className="App">
      <h1>My React</h1>
      <UserTable />
      <UserForm />
      <ProjectTable />
      <ProjectForm />
      <Form 
        documentFields = {{
          name: '',
          created: '',
          comm: ''
        }}
        collection = "commissionStructure"
        />
    </div>
  );
}

export default App;
