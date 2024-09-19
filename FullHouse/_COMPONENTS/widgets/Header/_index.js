import { initBurgerMenu } from "./core/_Header.js";
import { headerList } from "./components/headerList/_headerList.js";


const EnhancedHeader = () => {
  headerList();
  return initBurgerMenu();
};


export { EnhancedHeader as initHeader };