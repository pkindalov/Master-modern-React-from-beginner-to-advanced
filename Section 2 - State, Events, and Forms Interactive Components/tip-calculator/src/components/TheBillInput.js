export default function TheBillInput({ bill, onBillChange }) {
  return (
    <p>
      How much was the bill?{" "}
      <input
        type="number"
        name="bill"
        value={bill}
        onChange={(e) => onBillChange(Number(e.target.value))}
      />
    </p>
  );
}
