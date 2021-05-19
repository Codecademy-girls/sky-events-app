// import React from 'React';
import logo from './img/logo.png'

function App() {
  return (
    <div className="grid-container">
      <header>
        <img src={logo} alt="WeSky logo"/>
        <a href="/">WeSky</a>
      </header>
      <main className="main-grid">
        <div className="searchbar">
          Searchbar
        </div>
        <section className="locationInfo">
          Paris
          France
          2021-05-20 19:06
        </section>
        <section className="weather-current">
           Weather (current)
        </section>
        <section className="weather-forecast">
           Weather (forecast)
        </section>
        <section  className="astronomic">
          Astronomic data
        </section>
      </main>
      <footer>
        Made with 💙
      </footer>
    </div>
  );
}

export default App;
