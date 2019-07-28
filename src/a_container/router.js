import Activity from "./Activity/router"; // 活动
import Home from "./home/router"; // 活动
import System from "./system/router"; // 活动
import Resources from "../resources/router"; // 活动

export default [...Activity, ...Home, ...System, ...Resources];
