import './Amount.scss';

type AmountProps = {
  currency: string | number;
  value: number;
  description: string;
};
function Amount({ currency, value, description }: AmountProps) {
  return (
    <div className="amount">
        <p className="amount__currency">{currency}</p>
      <p className="amount__value">{value.toFixed(2)}  {description}</p>
    </div>
  );
}

export default Amount;
