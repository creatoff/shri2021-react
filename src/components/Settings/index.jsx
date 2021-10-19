import './styles.scss';

import React, { useState, useRef } from 'react';
import FormField from '../FormField';
import Toolbar from '../Toolbar';
import Button from '../Button';

// eslint-disable-next-line react/prop-types
function Settings({ state, handleSubmit: extractState, afterSubmit }) {
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
    {
      layout: 'inline',
      label: 'Synchronize every',
      label2: 'minutes',
      name: 'period',
      value: '10',
      type: 'number',
      min: 1,
      max: 60,
    },
  ];

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const elForm = useRef(null);

  const handleSubmit = (e) => {
    if (elForm.current.checkValidity() === false) {
      return;
    }

    e.preventDefault();
    const data = new FormData(elForm.current);

    setLoading(true);

    setTimeout(() => {
      const random = Math.random() < 0.5;

      if (random) {
        if (isError) {
          setError(false);
        }
        extractState(Object.fromEntries(data.entries()));
        setLoading(false);
        afterSubmit();
      } else {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  };

  return (
    <form className="settings" ref={elForm} onSubmit={handleSubmit}>
      <h2 style={{ margin: 0 }}>Settings</h2>
      <p style={{ margin: '8px 0' }}>
        Configure repository connection and&nbsp;synchronization settings.
      </p>
      {isError && <p style={{ color: '#FF3333' }}>Error occures, try again</p>}
      {fields.map((field) => (
        <FormField
          key={field.name}
          value={(state && state[field.name]) || ''}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...field}
        />
      ))}
      <Toolbar style={{ margin: '8px 0' }} direction="column">
        <Button theme="action" type="submit" disabled={isLoading}>
          Save
        </Button>
        <Button href="/" disabled={isLoading}>
          Cancel
        </Button>
      </Toolbar>
    </form>
  );
}

export default Settings;
