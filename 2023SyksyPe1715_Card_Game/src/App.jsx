import Card from './components/Card'
import './App.css'


const playerCard ={
  image: 'http://placekitten.com/120/100?image=0',
  stats:[{name: 'Cuteness', value: 90},
         {name: 'Speed', value: 5}]
};

const opponentCard ={
  image: 'http://placekitten.com/120/100?image=2',
  stats:[{name: 'Cuteness', value: 100},
         {name: 'Speed', value: 25}]
};

export default function App(){
  return(
    <>
      <h1>Hello world!</h1>
      <Card card = {playerCard}/>
      <Card card = {opponentCard}/>
    </>
  );
}