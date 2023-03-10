const Header = (props) =>{
  return(
    <h2>{props.course}</h2>
  )
}
const Content =(props) =>{
  return(
    <div>
      {props.parts.map(part =><li key={part.id}>{part.name} {part.exercises}</li>)}
    </div>
  )
}
const Total =(props) =>{
  console.log(23)
  const init = 0
  const total = props.parts.reduce((s,p) =>s+p.exercises,init)
  return(
    <p>Number of exercises {total}</p>
  )
}
const App = () => {
const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
const Course = (props) =>{
  return(
    <div>
      
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}
return (
  <div>
    <h1>Web development curriculum</h1>
    {courses.map(course =><Course course={course} />)}
  </div>
  )
}

export default App