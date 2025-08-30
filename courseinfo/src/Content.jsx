import Part from "./Part.jsx"

function Content (){
  const part1 = {
    name:'Fundamentals of React',
    exercises: 10}
  const part2 ={
    name: 'Using props to pass data',
    exercises: 7}
  const part3 = {
    name: 'State of a component',
    exercises: 14}
    return(
        <>
      <Part part={props.part1}/>
      <Part part={props.part2}/>
      <Part part={props.part3}/>
        </>
    )
}
export default Content