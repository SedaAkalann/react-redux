import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse } from "../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();
  // burada bu işlemi yapmamızın sebebi ben direkt olarak data dizimi değiştirmek istemiyorum filter metodu da zaten diziyi değiştirmez istenilen filtreleme koşularına göre yeni dizi döndürür eski dizi de olduğu gibi durur filtreleme koşulları sürdürüldüğü sürece filtrelenen dizi kalır ve koşllar ortadan kalktığı zaman eski durum tekrar geri gelir
  const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) => {
      return course.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return {
      courses: filteredCourses,
    };

    // return state.courses.data;
  });

  const renderedCourses = courses.map((course) => {
    return (
      <div key={course.id} className="panel">
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button
          onClick={() => {
            dispatch(deleteCourse(course.id));
          }}
          className="
        button is-danger"
        >
          Sil
        </button>
      </div>
    );
  });
  return <div className="courseList">{renderedCourses}</div>;
}

export default CourseList;
