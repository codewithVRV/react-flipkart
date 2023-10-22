import './Footer.css'

function Footer () {
    return (
        <>
            <footer className="footer  mt-auto py-3 bg-body-tertiary">
                <div className="container">
                    <span className="text-body-secondary copyright-name">Copy Rights Reserved by <b>{import.meta.env.VITE_COPY_RIGHT}</b> (8899-5375-88)</span>
                </div>
            </footer>
        </>
    )

}


export default Footer;