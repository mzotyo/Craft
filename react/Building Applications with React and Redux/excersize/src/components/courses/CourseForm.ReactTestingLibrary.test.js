import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("labels save buttons as 'Save' when not saving", () => {
  const { getByText, debug } = renderCourseForm();
  debug();
  getByText("Save");
});

it("labels save buttons as 'Saving...' when saving", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
