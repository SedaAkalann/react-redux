import React from "react";
import { useSelector } from "react-redux";

const CourseValue = () => {
  const totalCost = useSelector(({ courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) => {
      return course.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    let cost = 0;
    for (let course of filteredCourses) {
      cost += course.cost;
    }
    return cost;
  });

  return <div className="coursePrice">Toplam Tutar:{totalCost}</div>;
};

export default CourseValue;
