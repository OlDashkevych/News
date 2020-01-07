const mapper = items => {
  return items.map(
    ({
      title: title,
      abstract: abstract,
      url: url,
      multimedia: image,
      des_facet: tags,
      section: section,
      ...etc
    }) => ({
      title,
      abstract: abstract.slice(0, 200) + '...',
      url,
      image: image[4],
      tags: tags.slice(0, 3),
      section,
      ...etc,
    }),
  );
};
export default mapper;
