import React from "react";
import styles from "./style.module.css";

type Props = React.ComponentProps<"button"> & {
    name: string;
}

// export default function Button({ name, onClick }: Props) {
//     return (
//         <button className="btn" onClick={onClick}>
//             {name}
//         </button>
//     );
// }

export default function Button({ name, ...rest }: Props) {
    return (
        <button className={styles.container} {...rest}>
            <span>
                {name}
            </span>
        </button>
    );
}