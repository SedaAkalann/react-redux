import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeName, changeCost, changeDesc } from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";

function CourseForm() {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    // console.log(state);
    return state.form;
  });
  // console.log(useSelector((state) => state.form));
  // console.log(name, description, cost);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCourse({
        name,
        description,
        cost,
      })
    );
  };

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group ">
          <div className="field">
            <label className="label"> Ad</label>
            <input
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }}
              value={name}
              className="input is-expanded"
            />
          </div>
          <div className="field">
            <label className="label"> Açıklama</label>
            <textarea
              value={description}
              onChange={(e) => {
                dispatch(changeDesc(e.target.value));
              }}
              className="input is-expanded"
            />
          </div>
          <div className="field">
            <label className="label"> Fiyat</label>
            <input
              value={cost}
              onChange={(e) => {
                dispatch(changeCost(Number(e.target.value)));
              }}
              type="number"
              className="input is-expanded"
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-primary">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
