import React from "react";
import { Link } from "react-router-dom";
import "./ArticleList.css";
import PropTypes from "prop-types";

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list-container">
      <div className="article-list">
        <ul>
          {articles.map((article) => (
            <li key={article.id} className="article-item">
              <Link to={`/article/${article.id}`}>
                <h3>{article.title}</h3>
                <p>{article.abstract}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
ArticleList.propTypes = {
  articles: PropTypes.array.isRequired, 
};
export default ArticleList;
