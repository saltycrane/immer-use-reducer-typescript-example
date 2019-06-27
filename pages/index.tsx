import produce, { Draft } from "immer";
import React, { useReducer } from "react";
import { useImmerReducer } from "use-immer";

type State = number;

// method 1 [OK]: basic reducer w/o immer
const reducer1 = (state: State) => state;

// method 2 [BAD]: immer reducer using immer's currying api
const reducer2 = produce((draft: Draft<State>) => {
  draft + 1;
  return;
});

// method 3 [OK]: reducer used with `use-immer`
const reducer3 = (draft: Draft<State>) => {
  draft + 1;
  return;
};

// method 4 [OK]: immer reducer without currying api
const reducer4 = (state: State) =>
  produce(state, draft => {
    draft + 1;
    return;
  });

const Home = () => {
  // [OK] state1 is correctly typed as `number`
  const [state1] = useReducer(reducer1, 0);

  // [BAD] state2 is incorrectly typed as `any`
  const [state2] = useReducer(reducer2, 0);

  // [OK] state3 is correctly typed as `number`
  // because `useImmerReducer` sets the type of the return value
  const [state3] = useImmerReducer(reducer3, 0);

  // [OK] state4 is correctly typed as `number`
  const [state4] = useReducer(reducer4, 0);

  return (
    <div>
      {state1} {state2} {state3} {state4}
    </div>
  );
};

export default Home;
