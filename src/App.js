// import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello'
import Left from './components/Left'
import Mid from './components/Mid'
import Right from './components/Right'
var style1={
  color:'red',
  background:"blue",
}
function App() {
  return (
   <>
 <div className='box'>
<Left></Left>
<Mid></Mid>
<Right></Right>
 </div>

   </>
  );
}
export default App;
