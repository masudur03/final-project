import './App.css';
import Header from './Header';
import Hero from './Hero';
import Menu from './Menu';
import Testimonial from './Testimonial';
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <section className='reserve_section'>
          <Hero />
        </section>
        <section className='menu_section'>
          <Menu />
        </section>
        <section className='testimonianl_section'>
          <Testimonial />
        </section>
      </main>
      <footer>

      </footer>

    </div>
  );
}

export default App;
