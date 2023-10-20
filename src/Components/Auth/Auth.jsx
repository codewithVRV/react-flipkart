import { useEffect, useState } from "react";

function Auth ({onSubmit, resetForm}) {

    const [formDetails, setFormDetails] = useState({username: '', email: '', password: '', isLoading: false})

    function updateUsername(updatedUsername) {
        setFormDetails({...formDetails, username: updatedUsername});
    }

    function updateEmail (updatedEmail) {
        setFormDetails({...formDetails, email: updatedEmail})
    }

    function updatePassword (updatedPassword) {
        setFormDetails({...formDetails, password: updatedPassword})
    }

    function onFormSubmit () {
        setFormDetails({...formDetails, isLoading: true})
        onSubmit(formDetails)
    }


    useEffect(() => {
        setFormDetails({username: '', email: '', password: '', isLoading: false})
    }, [resetForm])

    return (
        <>
            <div className="input-group">
                    <input onChange={(e) => updateUsername(e.target.value)} value={formDetails.username} type="text" className="form-control" placeholder="Username" id="loginUsername" />
                </div>
            <div className="input-group">
                    <input onChange={(e) => updateEmail(e.target.value)} value={formDetails.email} type="email" className="form-control" placeholder="Email" id="loginUseremail" />
                </div>
                <div className="input-group">
                    <input onChange={(e) => updatePassword(e.target.value)} value={formDetails.password} type="password" className="form-control" placeholder="Password" id="Password" />
                </div>
                <div className="input-group">
                    {/* <button onClick={onFormSubmit} className="form-control btn btn-primary">Submit</button> */}
                    <button onClick={onFormSubmit} className="form-control btn btn-primary" type="button" disabled={formDetails.isLoading}>
                       {formDetails.isLoading &&  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> }
                        <span role="status">{(formDetails.isLoading) ? "Loading.." : "Submit"}</span>
                    </button>
            </div>
        </>
    )
}

export default Auth;