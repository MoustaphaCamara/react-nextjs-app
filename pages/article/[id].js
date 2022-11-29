import Link from "next/link";
import Meta from "../../components/Meta";

const article = ({ article }) => {
  return (
    <div className="article-page">
      <Meta title={article.title} description={article.body} />
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <Link href="/">Revenir à l'accueil</Link>
    </div>
  );
};

export default article;

export const getStaticProps = async (context) => {
  // context = quel id j'ai dans l'url
  console.log(context.params.id);
  //   context.params.id = l'id qu'on passera dans le lien
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + context.params.id
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
// on se précharge d'avance tous les posts en back:
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const articles = await res.json();
  //   préparer un objet Path avec les id -> Path {id:1, id:2 etc.}
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
