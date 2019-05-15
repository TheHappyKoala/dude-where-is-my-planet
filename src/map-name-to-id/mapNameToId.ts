export default (
  query: string,
  data: { id: number; name: string }[]
): string | number => {
  const match = data
    .map(entry => entry.name.toLowerCase())
    .findIndex(entry => entry.includes(query.toLowerCase()));

  return match !== -1 ? data[match].id : query;
};
