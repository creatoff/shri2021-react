import './styles.scss';
import BuildCard from '../BuildCard';

function History() {

  const history = [
    {
      id: 123,
      status: 'success',
      message: 'add documentation for postgres scaler',
      branch: 'master',
      hash: '9c9f0b9',
      user: 'Philip Kirkorov',
      timestamp: Date.now(),
    },
    {
      id: 234,
      status: 'pending',
      message: 'add documentation for postgres scaler',
      branch: 'master',
      hash: '9c9f0b9',
      user: 'Philip Kirkorov',
      timestamp: Date.now(),
    },
    {
      id: 345,
      status: 'failure',
      message: 'add documentation for postgres scaler',
      branch: 'master',
      hash: '9c9f0b9',
      user: 'Philip Kirkorov',
      timestamp: Date.now(),
    },
  ];

  return ( 
    <div className="history">
      {history.map((data) => <BuildCard key={data.id} {...data}/>)}
    </div>
  );
}

export default History;