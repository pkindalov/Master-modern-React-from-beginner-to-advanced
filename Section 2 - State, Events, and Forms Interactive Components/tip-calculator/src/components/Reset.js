export default function Reset({ onHandleReset, children }) {
  return (
    <p>
      <button onClick={onHandleReset}>{children}</button>
    </p>
  );
}
