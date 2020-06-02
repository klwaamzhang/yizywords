import { Word } from "../@types";

export const populateCategories = (data: Word[]) => {
  return data
    .flatMap((item) => item.categories)
    .reduce((acc, cur) => {
      if (cur !== "Inbox" && acc.indexOf(cur) === -1) {
        acc.push(cur);
      }
      return acc;
    }, new Array<string>());
};

export const filterMainSectionData = (filterName: string, data: Word[]) => {
  if (filterName === "Recycle Bin") {
    return data.filter((item) => item.status === "deleted");
  }
  return data.filter(
    (item) =>
      item.status !== "deleted" && item.categories.find((e) => e === filterName)
  );
};
