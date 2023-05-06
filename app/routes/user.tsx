import Axios from "axios"
import { useEffect, useState } from "react"

interface User {
    name: string
    role: string
}

export default function Index() {
    const [userList, setUserList] = useState<User[]>([])

    const getUsers = async () => {
        const res = Axios({ url: "http://localhost:3001/users" })
        res && setUserList((await res).data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {userList.map(e => {
                return (
                    <div key={e.name}>
                        {e.name}-{e.role}
                    </div>
                )
            })}
        </>
    )
}
