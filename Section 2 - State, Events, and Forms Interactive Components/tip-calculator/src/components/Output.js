import Reset from "./Reset";

export default function Output({ result, bill, tip, onHandleReset }) {
  return (
    <>
      <h3>
        You pay ${result} (${bill} + ${tip})
      </h3>
      <Reset onHandleReset={onHandleReset}>Reset</Reset>
    </>
  );
}
