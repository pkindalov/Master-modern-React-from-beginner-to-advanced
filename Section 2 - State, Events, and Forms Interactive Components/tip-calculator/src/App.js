import { useState } from "react";
import TheBillInput from "./components/TheBillInput";
import SelectPercentage from "./components/SelectPercentage";
import Output from "./components/Output";

function App() {
  const [bill, setBill] = useState(0);
  const [yourServiceRating, setYourServiceRating] = useState(0);
  const [friendServiceRating, setFriendServiceRating] = useState(0);

  const tip = Math.round((yourServiceRating + friendServiceRating) / 2);
  const result = bill + tip;

  function handleBillChange(billValue) {
    setBill(billValue);
  }

  function handleServiceRatingChange(value, whichRating = "you") {
    if (whichRating === "you") {
      setYourServiceRating(value);
    } else {
      setFriendServiceRating(value);
    }
  }

  function handleReset() {
    setBill(0);
    setYourServiceRating(0);
    setFriendServiceRating(0);
  }

  console.log("Your service rating: " + yourServiceRating);
  console.log("Friends service rating: " + friendServiceRating);

  return (
    <div>
      <TheBillInput bill={bill} onBillChange={handleBillChange} />
      <SelectPercentage
        whoRate="you"
        rating={yourServiceRating}
        onServiceRatingChange={handleServiceRatingChange}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        whoRate="friend"
        rating={friendServiceRating}
        onServiceRatingChange={handleServiceRatingChange}
      >
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <Output
          result={result}
          bill={bill}
          tip={tip}
          onHandleReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;
