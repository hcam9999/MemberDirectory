import Card from './Card'
import { useState } from 'react'


const Content = ({ members, search, setSearch }) => {

    const [filterValue, setFilterValue] = useState("")                                                                 //set filter value to null

    const sortMembers = () => {
      return filterMembers.sort((a, b) => {
         if (filterValue == "firstAZ")                                                                                //sort by first name A-Z
            return a.name.first.localeCompare(b.name.first)

          else if (filterValue == "firstZA")                                                                          //sort by first name Z-A
            return b.name.first.localeCompare(a.name.first)

          else if (filterValue == "lastAZ")                                                                           //sort by last name A-Z
            return a.name.last.localeCompare(b.name.last)

          else if (filterValue == "lastZA")                                                                           //sort by last name Z-A
            return b.name.last.localeCompare(a.name.last)

          else if (filterValue == "ageAscending")                                                                     //sort by age ascending
            return a.dob.age-b.dob.age

          else if (filterValue == "ageDescending")                                                                    //sort by age descending
            return b.dob.age-a.dob.age

          else 
            return a.name.first.localeCompare(b.name.first)                                                         //default -- sort by first name A-Z
      })
     
    }

    // //sort data by first name A-Z
    // const sortedByFirstNameAZ = () => {
    //   return filterMembers.sort((a, b) => a.name.first.localeCompare(b.name.first))

    // }

    // //sort data by first name Z-A
    // const sortedByFirstNameZA = () => {
    //   return filterMembers.sort((a, b) => b.name.first.localeCompare(a.name.first))

    // }

    // //sort data by last name A-Z
    // const sortedByLastNameAZ = () => {
    //   return filterMembers.sort((a, b) => a.name.last.localeCompare(b.name.last))

    // }

    // //sort data by last name Z-A
    // const sortedByLastNameZA = () => {
    //   return filterMembers.sort((a, b) => b.name.last.localeCompare(a.name.last))

    // }

    // //sort data by age ascending
    // const sortedByAgeAsc = () => {
    //   return filterMembers.sort((a, b) => a.dob.age-b.dob.age)
    // }

    // //sort data by age descending
    // const sortedByAgeDesc = () => {
    //   return filterMembers.sort((a, b) => b.dob.age-a.dob.age)
    // }

    //filter data for search bar
      const trimmedInput = search.replace(/\s+/g, '').toLowerCase();                                                     //remove spacing from input   
      const filterMembers = members.filter((member => member.name.first.toLowerCase().includes(trimmedInput)             //search by firstname
            || member.name.last.toLowerCase().includes(trimmedInput)                                                     //searh by lastname
            || (`${member.name.first}${member.name.last}`).toLowerCase().includes(trimmedInput)                          //search by first & last
            || (`${member.name.last}${member.name.first}`).toLowerCase().includes(trimmedInput)                          //search by last & first
            ))
      

    //map data 
        const memberData = sortMembers().map(member => {

            return (
                <Card
                  key={member.dob.date}
                  member={member}
                />
              )
              })
              
    return (
        <>  
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>                                            {/*prevent page from reloading */}
            <label htmlFor="search">Search Members</label>
            <input
              id="search"
              type="text"
              placeholder="Search for members"
              value={search}
              onChange={(e) => setSearch(e.target.value)}                                                                /*use value from input to search */
            />

            <select 
              className="filter-bar" name="filter" 
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="" hidden>Filter by:</option>
              <option value="firstAZ">First Name: A-Z</option>
              <option value="firstZA">First Name: Z-A</option>
              <option value="lastAZ">Last Name: A-Z</option>
              <option value="lastZA">Last Name: Z-A</option>
              <option value="ageAscending">Age: Ascending</option>
              <option value="ageDescending">Age: Descending</option>
            </select>
          </form>
            <section className='card-list'>
                {memberData}
            </section>
            
        </>
            
    )
}

export default Content
