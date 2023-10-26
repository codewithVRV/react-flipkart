import './Footer.css'

function Footer () {
    return (
        <>
            

            <div className="container-fluid footer">
                <div className="row">
                    <p>Copy Rights Reserved by <b>{import.meta.env.VITE_COPY_RIGHT}</b> (8899-5375-88)</p>
                </div>
            </div>
        </>
    )

}


export default Footer;