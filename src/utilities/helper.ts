export default function useHelperFunctions() {
  function convertLinkName(name: string) {
    return name.toLowerCase().split(" ").join("-");
  }

  return {
    convertLinkName,
  };
}
