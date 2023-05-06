import type { FC } from "react"
import styles from "./index.module.less"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : styles[className])).join(" ")
}

const Detail: FC = () => {
    return <div className={c("detail")}>我是Detail!</div>
}

export default Detail

// export function links() {
//     return [{ rel: "stylesheet", href: styles }]
// }
