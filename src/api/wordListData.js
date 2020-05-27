/**
 * Mocking client-server processing
 */
import _wordListData from "./wordListData.json";

const TIMEOUT = 500;

const api = {
  getWordListData: (cb, timeout) =>
    setTimeout(() => cb(_wordListData), timeout || TIMEOUT),
  // buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
};
