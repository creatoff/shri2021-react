import { useRef } from 'react';
import FormField from "../FormField";
import Toolbar from "../Toolbar";
import Button from "../Button";


function Settings({state, handleSubmit: extractState, afterSubmit}) {

  const fields = [
    {
      label: 'GitHub repository',
      name: 'repository',
      placeholder: 'user-name/repo-name',
      required: true,
    },
    {
      label: 'Build command',
      name: 'build_command',
      required: true,
    },
    {
      label: 'Main branch',
      name: 'main_branch',
    },
  ];

  const elForm = useRef(null);

  const handleSubmit = (e) => {
    if (elForm.current.checkValidity() === false) {
      return;
    }
    e.preventDefault();
    const data = new FormData(elForm.current);
    extractState(Object.fromEntries(data.entries()));
    afterSubmit();
  }

  return ( 
    <form ref={elForm} onSubmit={handleSubmit}>
      <h2 style={{margin: 0}}>Settings</h2>
      <p style={{margin: '8px 0'}}>Configure repository connection and synchronization settings.</p>
      {fields.map((field) => (
        <FormField
          key={field.name}
          value={state && state[field.name] || ''}
          {...field}
        />
      ))}
      <Toolbar style={{margin: '8px 0'}}>
        <Button theme="action" type="submit">Save</Button>
        <Button href="/">Cancel</Button>
      </Toolbar>
    </form>
   );
}

export default Settings;