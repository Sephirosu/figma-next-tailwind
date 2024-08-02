interface CurrencyFormatterProps {
  amount: number;
}

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({ amount }) => {
  const usDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formattedAmount = usDollar.format(amount);

  return <>{formattedAmount}</>;
};

export default CurrencyFormatter;
