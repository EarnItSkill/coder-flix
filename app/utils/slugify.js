export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // non-alphanumeric remove
    .replace(/\s+/g, "-") // space → dash
    .replace(/-+/g, "-"); // multiple dash → single dash
};
