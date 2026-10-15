import React,{useState,useEffect} from 'react';
import './App.css'
import Button from './components/ui/button-component'
import summa from './assets/summaaa.jpg';
const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    const data_fetch = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await data_fetch.json();
    setData(data);
  }
  fetchData();
  }, []); 

  return(
    
    <div style={{textAlign:'center'}}>
      <div style={{paddingTop:'150px'}}></div>
      <p style={{fontSize:'90px',color:'yellow'}}>death counter</p>
      
      {/* <br />
      <img src={summa}className='image'/>
      <br /> */}
      {/* <Button name="YOYOYo" onClick={() => console.log('Button clicked!')} /> */}
      <p style={{color:'red', fontSize:'65px'}}> {count}</p>
      <div >
      <Button name="kill" onClick={() => setCount(count + 1)} />
      <Button name="resurect" onClick={() => setCount(count-1)} />
    </div>
    <p style={{fontSize:'22px',color:'yellow', letterSpacing:'1px', wordSpacing:'11px'}}> every time you press a button judgment will be made</p>

    <div style={{padding:'120px'}}>

    
    </div>
    
    <div style={{color:'yellow', fontSize:'70px',textAlign:'left'}}>
      <p style={{margin:'150px',fontSize:'120px'}}>persons who have died</p>
    </div>
  
    <div className='list'>
      {data.map((user) => (
        <div className='card_users' key={user.id}>
          <div className='user_details'>
            <p style={{color:'greenyellow'}}>person: {user.id}</p>
            <p>email: {user.email}</p>
            <p>username: {user.username}</p>
            <p style={{fontSize:"35px"}}>about person's location</p>
           
            <table style={{margin:'35px'}}>
              
                <tr>
                  <td>Street:</td>
                  <td>{user.address.street}</td>
                </tr>
                <tr>
                  <td>Suite:</td>
                  <td>{user.address.suite}</td>
                </tr>
                <tr>
                  <td>City:</td>
                  <td>{user.address.city}</td>
                </tr>
                <tr>
                  <td>Zipcode:</td>
                  <td>{user.address.zipcode}</td>
                </tr>
                <tr>
                  <td>Lat/long:</td>
                  <td>{user.address.geo.lat}, {user.address.geo.lng}</td>
                </tr>
                
              
            </table>
            <table>
              Company Detials 
              <tr>
                <td>Company name:</td>
                <td>{user.company.name}</td>
              </tr>
            </table>
            
            
            <p>Company's catchphrase: {user.company.catchPhrase}</p>
            <p>Company bs : {user.company.bs}</p>
          </div>
          <div className='user_name'> {user.name}</div>
          
        </div>
      ))}
    </div>
   
   
    </div>
  )
}
export default App;