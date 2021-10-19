import React, { useRef } from 'react';
import FormField from '../FormField';
import Toolbar from '../Toolbar';
import Button from '../Button';

// eslint-disable-next-line react/prop-types
function NewBuild({ handleCancel, handleSubmit: submit, afterSubmit }) {
  const elForm = useRef(null);

  const handleSubmit = (e) => {
    if (elForm.current.checkValidity() === false) {
      return;
    }
    e.preventDefault();
    const data = new FormData(elForm.current);
    submit(Object.fromEntries(data.entries()));
    afterSubmit();
  };

  return (
    <>
      <h2 style={{ margin: 0 }}>New build</h2>
      <p style={{ margin: '12px 0' }}>Enter the commit hash which you want to&nbsp;build.</p>
      <form ref={elForm} onSubmit={handleSubmit}>
        <FormField placeholder="Commit hash" name="hash" />
        <Toolbar>
          <Button theme="action" type="submit">
            Run build
          </Button>
          <Button theme="pseudo" onClick={handleCancel}>
            Cancel
          </Button>
        </Toolbar>
      </form>
    </>
  );
}

export default NewBuild;
