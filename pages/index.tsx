import produce, { Draft } from "immer";
import React, { useReducer } from "react";
import { useImmerReducer } from "use-immer";

type State = number;

const reducer1 = (state: State) => state;

const reducer2 = produce((draft: Draft<State>) => {
  draft + 1;
  return;
});

const reducer3 = (state: State) => state;

const Home = () => {
  // state1 is correctly typed as `number`
  const [state1] = useReducer(reducer1, 0);

  // state2 is incorrectly typed as `any`
  const [state2] = useReducer(reducer2, 0);

  // state3 is correctly typed as `number`
  const [state3] = useImmerReducer(reducer3, 0);

  return (
    <div>
      {state1} {state2} {state3}
    </div>
  );
};

export default Home;
