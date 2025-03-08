import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import "./App.css";

const API_KEY = "rFDLnuDWALCo0SjIGPVNq29H4PZ6LJ9W"; 
const API_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${API_KEY}`;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setArticles(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              loading ? (
                <p className="loading">Loading...</p>
              ) : error ? (
                <p className="error">Error: {error}</p>
              ) : (
                <ArticleList articles={articles} />
              )
            }
          />
          <Route path="/article/:id"  element={<ArticleDetail articles={articles} />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;