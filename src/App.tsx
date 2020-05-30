import React from "react";

import config from "./config";

import { AnydoModelItem } from "./modules/anydo/interfaces";

import getTasks from "./modules/anydo";

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<AnydoModelItem[]>([]);

  console.log("DEBUGGG", config);

  React.useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  return (
    <main>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default App;
