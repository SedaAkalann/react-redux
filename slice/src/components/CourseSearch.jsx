import React from "react";
import { changeSerchTerm } from "../store/slices/courseSlice";
import { useDispatch, useSelector } from "react-redux";

const CourseSearch = () => {
  const { searchTerm } = useSelector((state) => {
    return state.courses;
  });
  const dispatch = useDispatch();
  return (
    <div className="listHeader">
      <h3 className="title is-3">Kurslarım</h3>
      <div className="search field is-horizontal">
        <label className="label">Ara</label>
        <input
          value={searchTerm}
          onChange={(e) => {
            dispatch(changeSerchTerm(e.target.value));
          }}
          className="input"
        />
      </div>
    </div>
  );
};

export default CourseSearch;
