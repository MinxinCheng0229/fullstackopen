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
const Course = (props) =>{
    return(
      <div>
        
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} />
      </div>
    )
  }
  export default Course