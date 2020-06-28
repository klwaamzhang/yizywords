/**
 * Mocking client-server processing
 */
import _wordListData from "./wordListData.json";

const TIMEOUT = 5000;

export const dataApi = {
  getWordListData: new Promise((resolve, reject) => {
    // console.log(_wordListData);
    setTimeout(() => resolve(_wordListData), TIMEOUT);
  }),
};
