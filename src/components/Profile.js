//----------------------------------------TO-DO----------------------------------------
//---------------------------------get location to display properly--------------------
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Profile = ({ members }) => {
    const { id } = useParams(); 
    //convert number to month
    const numToMonth = (num) => {
      const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      return monthNames[parseInt(num)]
    }
    
    //Convert number to month (first attemp)
    // const convertMonth = (num) => {
    //   switch (num) {
    //     case '01':
    //       return 'January'
    //       break;
    //     case '02':
    //       return 'February'
    //       break;
    //     case '03':
    //       return 'March'
    //       break;
    //     case '04':
    //       return 'April'
    //       break;
    //     case '05':
    //       return 'May'
    //       break;
    //     case '06':
    //       return 'June'
    //       break;
    //     case '07':
    //       return 'July'
    //       break;
    //     case '08':
    //       return 'August'
    //       break;
    //     case '09':
    //       return 'September'
    //       break;
    //     case '10':
    //       return 'October'
    //       break;
    //     case '11':
    //       return 'November'
    //       break;
    //     default:
    //       return 'December'
    // }}
  
    
    const getMemberByID = () => {
      return members.filter(member => (member.dob.date).toString() === id).map((member) => 
          <div className="profile--card">
              <img className="profile--image" src={member.picture.large} alt={`"${member.name.first} ${member.name.last} profile picture"`} />
              <div class="container">
                  <div class="row">
                    <div className="column1" id="profile--bold">Name:</div>
                    <div className="column2" id="profile--text">{member.name.first} {member.name.last} </div>
                  </div>

                  <div className="row">
                    <div className="column1" id="profile--bold">Address:</div>
                    <div className="column2" id="profile--text">{`${member.location.street.number}`}  {`${member.location.street.name}`} <br />
                      {`${member.location.city}`}, {`${member.location.state}`} {`${member.location.postcode}`}
                    </div>
                  </div>

                  <div className="row">
                    <div className="column1" id="profile--bold">Phone:</div>
                    <div className="column2" id="profile--text">{member.phone}</div>
                  </div>

                  <div className="row">
                    <div className="column1" id="profile--bold">E-mail:</div>
                    <div className="column2" id="profile--text">{member.email}</div>
                  </div>

                  <div className="row">
                    <div className="column1" id="profile--bold">DOB:</div>
                    <div className="column2" id="profile--text"> {`${numToMonth((member.dob.date).substring(6,8))} ${(member.dob.date).substring(8,10)}, ${(member.dob.date).substring(0,4)}`}</div>
                  </div>

                  <div className="row">
                    <div className="column1" id="profile--bold">Age:</div>
                    <div className="column2" id="profile--text">{member.dob.age}</div>
                  </div>
            
              </div>

          </div>
          


        )
      }
       

    return (
        <main className="profile">
          <h1 className="profile--h1">Member Profile</h1>
          <div>{getMemberByID()}</div> 
          <p className="profile--returnToMain">Return to <Link to="/">Member Directory</Link></p>
        </main>
            
    )

     
}

export default Profile
{/* {member.location.map((address) => (
        <>{address.street}</>))}</p> */}