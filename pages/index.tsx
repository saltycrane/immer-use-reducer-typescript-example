import produce, { Draft } from "immer";
import React, { useReducer } from "react";

type State = number;

const reducer1 = (state: State) => state;

const reducer2 = produce((draft: Draft<State>) => {
  draft + 1;
  return;
});

const Home = () => {
  // state1 is correctly typed as `number`
  const [state1] = useReducer(reducer1, 0);

  // state2 is incorrectly typed as `any`
  const [state2] = useReducer(reducer2, 0);

  return (
    <div>
      {state1} {state2}
    </div>
  );
};

export default Home;
