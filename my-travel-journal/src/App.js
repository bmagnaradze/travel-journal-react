import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"



function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.title}
            {...item}
        />
    )
}) 
  return (
        <div>
            <Header />
            <section className="cards-list">
                      {cards}
            </section>
      </div>
  );
}

export default App;
