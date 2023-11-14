import './App.scss';
import Layout from './layout/layout';


function App() {

  const card = [
    {
      id: "2",
      variant: "click",
      front: "Click",
      back: "Back"
    },
  ]
  return (
    <div>
      <Layout key={card.id} card={card}/>
    </div>
  );
}

export default App;
