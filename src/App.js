import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import products from './constants/products'

function App() {
  console.log(products)
  const productsCard = products.map(product => 
      <Card
        key = {product.id} 
        {...product} 
      />
      ) 
  
    return (
    <>
      <Navbar/>
      <Hero/>
      <div className='cards-parent'>
        {productsCard}
      </div>
    </>
  );
}

export default App;
