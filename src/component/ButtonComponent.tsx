// import React from "react";
//
// export default function ButtonComponent(props:{children:React.ReactNode}){
//     return(
//         <>
//             <button>{props.children}</button>
//         </>
//     )
// }

export default function ButtonComponent(props) {
    const name = props.name;

    return(
        <>
            <button onClick={()=>{props.onClick(name)}}>{props.name}</button>
        </>
    )
}