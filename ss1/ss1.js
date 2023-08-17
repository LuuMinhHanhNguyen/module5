let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];

let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  },
];

// ex1
let result1 = courses.filter((el) => el.rating >= 4);
console.log(result1);

// ex2
let result2 = courses
  .filter((el) => el.rating < 4)
  .map(
    (element) => element.id + " - " + element.title + " - " + element.rating
  );
console.log(result2);

//ex3
let result3 = (a, b) => [...a, ...b];
console.log(result3(courses, addedCourses));
 