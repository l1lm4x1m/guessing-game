import "./index.css";
import { createStore } from "@redux/createStore";
import { rootReducer } from "@redux/reducers/rootReducer";
import { App } from "@components/App/App";

export const store = createStore(rootReducer);
const app = new App();

document.body.append(app.render());
