  const Header = (props) =>{
    return(
      <h1>{props.course}</h1>
    )
  }
  const Content =(props) =>{
    return(
      <div>
        {props.parts.map(part =><li key={part.id}>{part.name} {part.exercises}</li>)}
      </div>
    )
  }
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }
  const Course = (props) =>{
    return(
      <div>
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
      </div>
    )
  }
  return <Course course={course} />
}

export default App