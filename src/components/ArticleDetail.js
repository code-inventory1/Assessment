import React from "react";
import { useParams } from "react-router-dom";
import "./ArticleDetail.css";
import PropTypes from "prop-types";

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((art) => art.id.toString() === id);

  if (!article) {
    return <p className="article-detail-container">Article not found.</p>;
  }

  return (
    <div className="article-detail-container">
      <div className="article-detail">
        <h2>{article.title}</h2>
        <p>{article.abstract}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read Full Article
        </a>
      </div>
    </div>
  );
};

ArticleDetail.propTypes = {
  articles: PropTypes.array.isRequired, 
};

export default ArticleDetail;
