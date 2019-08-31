import React from 'react'
import '../Badge/badge.css';

export const Badge = props =>{ 
    console.log(props);

    return (
        <div>
           <h4> {props.children} </h4>
        </div>
    )
}


export default Badge

// export class Badge extends Component {
//     render() {
//         return (
//             <div>
//                 <p>{props.count}</p>
//             </div>
//         )
//     }
// }

// export default Badge
