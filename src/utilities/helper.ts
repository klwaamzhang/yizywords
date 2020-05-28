export default function useHelperFunctions() {
  function toUrlFormat(text: string) {
    return text.split(" ").join("-");
  }

  function toDisplayFormat(text: string) {
    return text.split("-").join(" ");
  }

  return {
    toUrlFormat,
    toDisplayFormat,
  };
}
