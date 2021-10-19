import React, { useState } from 'react';
import BuildCard from '../BuildCard';
import Toolbar from '../Toolbar';
import Button from '../Button';
import history from '../../mocks';
import './styles.scss';

function History() {
  const [size, setSize] = useState(2);
  const isMax = size >= history.length;

  const showMore = () => (!isMax ? setSize(size + 1) : null);

  return (
    <div className="history">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {history.map((data, idx) => (idx < size) && <BuildCard key={data.id} {...data} />)}
      <Toolbar style={{ margin: '0 0 8px 0' }} direction="column">
        {!isMax && <Button onClick={showMore}>Show more</Button>}
      </Toolbar>
    </div>
  );
}

export default History;
