const Footer = () => {
    const today = new Date()
    return (   
        <footer>
            <hr/>
            <p className="footer--copyrights">Copyright &copy; {today.getFullYear()} HNC. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
