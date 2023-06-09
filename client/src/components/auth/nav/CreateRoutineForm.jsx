import { useState } from "react";
import { createRoutine } from "../../../api/routines";

export default function CreateRoutine() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [is_public, setIs_Public] = useState(false);
  const [myCreatedRoutines, setMyCreatedRoutines] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await createRoutine(is_public, name, goal);
      console.log("result in create routine", result);
      setMyCreatedRoutines(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="routineForm">
      <h2>Create Your New Routine</h2>

      <form className="routineForm" onSubmit={handleSubmit}>
        <label>enter routine name</label>{" "}
        <input
          type="checkbox"
          value={is_public}
          placeholder="is it public"
          onChange={(e) => {
            e.preventDefault;

            setIs_Public(e.target.value);
          }}
        />
        <input
          type="text"
          value={name}
          placeholder="enter routine name"
          onChange={(e) => {
            e.preventDefault;

            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={goal}
          placeholder="enter routine goal"
          onChange={(e) => {
            e.preventDefault;

            setGoal(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
