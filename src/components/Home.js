import Content from "./Content"
const Home = ({members, error, search, setSearch}) => {
    
    return (
        <main className="main">  
            {error && <p className="main--errormessage">Error: {error}</p>}
            {!error && 
                <Content 
                    members = {members}
                    search = {search}
                    setSearch = {setSearch}
                />}
          
        </main>
    )
}

export default Home
