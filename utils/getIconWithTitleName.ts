export const getIconWithTitleName = (type: string) => {
  switch (type.toLowerCase()) {
    case "educational":
      return "book";
    case "sports":
      return "football";
    default:
      return "add";
  }
};
