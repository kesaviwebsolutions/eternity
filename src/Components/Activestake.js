import Table from 'react-bootstrap/Table';
import './Activestake.css';
function Activestake() {
  return (
  <section>
      <div className='container'>
      <Table striped bordered   style={{width:'90%', background:'#191015', color:'#fff'}}>
      <thead>
        <tr>
          <th>Staked Balance</th>
          <th>End Time</th>
          <th>APY%</th>
          <th>Expected Reward</th>
        </tr>
      </thead>
      <tbody>
        <tr className='table'>
          <td className='table-text'>0</td>
          <td className='table-text'>0</td>
          <td className='table-text'>0</td>
          <td className='table-text'>0</td>
        </tr>
        <tr>
          <td className='table-text'>0</td>
          <td className='table-text'>0</td>
          <td className='table-text'>0</td>
          <td className='table-text'>0</td>
        </tr>
        <tr>
          <td className='table-text'>0</td>
          <td className='table-text'>0</td>
          <td className='table-text'>0</td>
          <td className='table-text'>0</td>
        </tr>
      </tbody>
    </Table>
      </div>
  </section>
  );
}

export default Activestake;