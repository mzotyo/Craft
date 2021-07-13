import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActoins from "./actions/courseActions";

it("Should handle creating courses", function () {
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean Code",
  };

  const action = courseActoins.createCourseSuccess(course);
  store.dispatch(action);

  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
