interface CurrencyFormatterProps {
  amount: number;
  currency: string;
}

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({
  amount,
  currency,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });

  const formattedAmount = formatter.format(amount);

  return <>{formattedAmount}</>;
};

export default CurrencyFormatter;
