import React from "react";
import type { NextPage } from 'next'

import Registration from "../../components/Registration";
import UserLayoutForm from "../../layouts/UserLayoutForm.module";
import Login from "../../components/Login";


const SingIn: NextPage = () => {
    const [regVue, setRegVue] = React.useState(true)
    return(
        <>{
            (regVue)
                ?<UserLayoutForm>
                    <Registration/>
                    <button onClick={()=>setRegVue(false)}
                        >Login</button>
                </UserLayoutForm>

                :<UserLayoutForm>
                    <Login/>
                    <button onClick={()=>setRegVue(true)}
                        >Registration</button>
                </UserLayoutForm>
        }
            <h3>
                Сonsent to the processing of personal data
            </h3>
            You confirm that you consent to the processing, storage and use of personal data specified in this form.
        </>
    )
}

export default SingIn