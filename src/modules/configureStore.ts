import { legacy_createStore as createStore } from "redux";
import rootReducer from "@modules";

export default function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
