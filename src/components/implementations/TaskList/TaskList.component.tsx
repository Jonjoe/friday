import React from "react";
import * as Styled from "./TaskList.styles";

import config from "../../../config";

import { AnydoModelItem } from "../../../modules/anydo/interfaces";

import getTasks from "../../../modules/anydo";
/**
 * @name TaskList
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

const TaskList: React.FC = (): JSX.Element => {
  const [tasks, setTasks] = React.useState<AnydoModelItem[]>([]);

  console.log("DEBUGGG", config);

  React.useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
