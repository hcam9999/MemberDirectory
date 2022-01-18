import { Link } from "react-router-dom"
const Card = ({member}) => {

  return (
    <div className="card">
      <Link className="card--link" to={`/profile/${member.dob.date}`} >
        <img className = "card--image" src={member.picture.thumbnail} alt={`"${member.name.first} ${member.name.last} picture"`} />
        <p className="card--text">{member.name.first} {member.name.last}</p>
        <p className="card--text">Age: {member.dob.age}</p>
      </Link>
      
    </div>
  )
}

export default Card
