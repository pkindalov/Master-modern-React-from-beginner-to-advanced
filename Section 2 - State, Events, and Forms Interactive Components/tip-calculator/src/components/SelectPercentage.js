export default function SelectPercentage({
  whoRate,
  rating,
  onServiceRatingChange,
  children,
}) {
  return (
    <p>
      {children}
      <select
        name="selectPercentage"
        value={rating}
        onChange={
          whoRate === "you"
            ? (e) => onServiceRatingChange(Number(e.target.value), "you")
            : (e) => onServiceRatingChange(Number(e.target.value), "friend")
        }
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </p>
  );
}
