import React from "react";
export default function SubjectComponent(props: {name : string ,children: React.ReactNode}) {
    return(
        <>
            <h2>{props.name}</h2>
            {props.children}
        </>
    )
}