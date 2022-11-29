import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
// Par défaut (propre à React), si je veux pas passer de title/meta spécifique
Meta.defaultProps = {
  title: "Le blog Dev, pour les passionnés du web",
  description: "Apprendre et comprendre le développement en js, react...",
};

export default Meta;
