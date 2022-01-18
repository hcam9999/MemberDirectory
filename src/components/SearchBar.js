
const SearchBar = ({ search, setSearch }) => {


    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>                               {/*prevent page from reloading */}
            <label htmlFor="search">Search Members</label>
            <input
                id="search"
                type="text"
                placeholder="Search for members"
                value={search}
                onChange={(e) => setSearch(e.target.value)}                                                   /*use value from input to search */
            />
        </form>
    )
}

export default SearchBar

