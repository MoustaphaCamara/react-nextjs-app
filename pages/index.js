import React from "react";
import Article from "../components/Article";
import Meta from "../components/Meta";

const index = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      <Meta />
      <h2>Blog</h2>
      <div className="article-list">
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default index;

// Rendu côté serveur
// pas besoin de useEffect, le serveur fait son travail et pas besoin d'empêcher une recharge
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const articles = await res.json();
  // console.log(articles);
  return {
    props: {
      articles,
    },
  };
};
