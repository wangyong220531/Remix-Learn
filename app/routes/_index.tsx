import Axios from "axios"
import { Form, useLoaderData } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import type { ActionArgs } from "@remix-run/node"

interface User {
    name: string
    role: string
}

export async function loader() {
    return await Axios({ url: "http://localhost:3001/users" }).then(res => res.data)
}

export async function action({ request }: ActionArgs) {
    const form = await request.formData()
    await Axios({ url: "http://localhost:3001/users", method: "POST", data: { name: form.get("name"), role: form.get("role") } })
    return redirect("/")
}

export default function Index() {
    const users = useLoaderData()

    return (
        <>
            {users.map((e: User) => {
                return (
                    <div key={e.name}>
                        {e.name}-{e.role}
                    </div>
                )
            })}
            <Form method="POST">
                <label>姓名：</label>
                <input name="name"></input><br />
                <label>角色：</label>
                <input name="role"></input><br />
                <button type="submit">提交</button>
            </Form>
        </>
    )
}
