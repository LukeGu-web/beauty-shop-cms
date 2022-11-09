export const slugGenerator = (input) =>
  '/' +
  input
    .toLowerCase()
    .replace(/\s+/g, '-')
    .slice(0, 200)
    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
