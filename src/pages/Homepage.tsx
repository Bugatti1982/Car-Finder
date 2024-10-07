import React from 'react';
import SearchFrame from '../components/SearchFrame';
import ResultsFrame from '../components/ResultsFrame';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './../styles/styles.css';

const HomePage: React.FC = () => {
  return (
    <div className="container mt-5 pt-5">
      <Header />
      <div className="row justify-content-center">
        <div className="col-md-4">
          <SearchFrame />
        </div>
        <div className="col-md-8">
          <ResultsFrame />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;