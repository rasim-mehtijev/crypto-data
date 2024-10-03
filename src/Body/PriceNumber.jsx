import { NumericFormat } from "react-number-format";

const PriceNumber = ({ value, symbol }) => {
  console.log('PriceNumber');
  return (
    <NumericFormat
      value={value}
      thousandSeparator=" "
      displayType="text"
      prefix={symbol}
    />
  );
};

export default PriceNumber;
