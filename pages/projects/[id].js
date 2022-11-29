const project = () => {
  return <div></div>;
};

export default project;

export const getStaticProps = async () => {
  await fetch();
};
export const getStaticPaths = (context) => {
  const filtered = projects.filter(
    (project) => project.id == context.params.id
  );

  if (filtered.length > 0) {
    return {
      props: {
        project: filtered[0],
      },
    };
  }
};
