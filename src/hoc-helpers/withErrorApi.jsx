import React, { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";


export const withErrorApi = (Comp)=>{
    

    return ((props) => {
        const [erroApi, setErrorApi] = useState(false);
        
        return (
            <>
                {erroApi
                    ?<ErrorMessage  />
                    :(
                            <Comp 
                            setErrorApi={setErrorApi}
                            {...props}
                            />
                    )
                }
            </>

        )
    })
}