import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from './compo/Calls';


function App() {
  const{users}= useSelector(e=> e.users);
  const loading =useSelector(e=> e.users.status)
  const dispatch=useDispatch();

useEffect(()=>{
dispatch(getUsers())
},[])

console.log(loading)

  return (
  <>
  {loading==='loading' && <h1>LOADINGaa</h1>}
  {users && users.map(e=>(<p>{e.title}</p>))}
  {loading==='failed' && <h1>CHECK API</h1>}

  </>
  );
}

export default App;
