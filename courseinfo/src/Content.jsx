import Part from "./Part.jsx"

function Content (props){
   const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

    return(
        <>
        <Part course={props.course.parts[0]} />
        <Part course={props.course.parts[1]} />
        <Part course={props.course.parts[2]} />
        </>
    )
}
export default Content