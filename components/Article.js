import Link from "next/link";
import React from "react";

const Article = ({ article }) => {
  return (
    <Link
      href="/article/[id]"
      as={`/article/${article.id}`}
      className="article"
    >
      <h3>{article.title} ➡️</h3>
      <p>{article.body}</p>
    </Link>
  );
};

export default Article;
