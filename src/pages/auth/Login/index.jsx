import React, { useState } from "react";

const Login = () => {

    const [PassShow, setPassShow] = useState(false)

    const ShowPassword = () => {
        setPassShow (!PassShow);
    }

    return(
        <section className=" login flex items-center justify-center h-[100vh] ">
            <div className="flex flex-col items-center justify-center bg-[#ad2626] p-3 rounded-xl">
                <h1 className="text-2xl ">Login</h1>
                
                <input type="text" name="" placeholder="Enter username" />
                
                <input type={ PassShow? "text" : "password"} placeholder="password"  />
                <button onClick={ShowPassword}>show password</button>
                 <input type="submit" name="" value="Login" />

                 <a href="#" className="">Lost your password</a>
                 <a href="#" className="">Don't have an account</a>


                
            </div>
            
        </section>
    )
}

export default Login