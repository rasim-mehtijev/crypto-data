import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";
import CoinPage from "./CoinPage";

function Body(props) {
  return (
    <>
      <GlobalData />
      <CoinPage {...props} />
      <ListCoins {...props} />
    </>
  );
}

export default Body;
