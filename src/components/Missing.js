//This page is loaded when link goes to a page that is not found
import { Link } from "react-router-dom"
const Missing = () => {
    return (
        <main className="missing">
            <h2>Page Not Found</h2>
            <p>Oops! The content you are looking for can't be found.</p>
            <p>
                Go back to <Link to='/'>Member Directory</Link>
            </p>
        </main>
    )
}

export default Missing
