import moment from "moment";
import { AnydoResponceObject, AnydoModelItem } from "./interfaces";
import config from "../../config";

async function asyncGetTasks(): Promise<AnydoModelItem[]> {
  const url = "https://sm-prod2.any.do/api/v5/me/sync?updatedSince=0";
  const options = {
    headers: {
      "X-Anydo-Auth": config.ANYDO_TOKEN,
    },
  };

  const response = await fetch(url, options);
  const json: AnydoResponceObject = await response.json();
  const tasks = json.models.task.items;
  const filteredTasks = tasks
    .filter((task) => task.status === "UNCHECKED")
    .filter((task) => {
      const diff = moment().diff(task.dueDate, "days");

      if (task.dueDate === 0) return true;

      if (diff === 0 || diff === 1) {
        return true;
      }

      return false;
    });

  return filteredTasks;
}

export default asyncGetTasks;
