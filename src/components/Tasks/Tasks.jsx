import React from "react";
import styles from "./tasks.module.css";
import TaskApp from "../TaskApp";


const Tasks = ({item}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <p>{item}</p>
      </div>
    </>
  );
};

export default Tasks;
