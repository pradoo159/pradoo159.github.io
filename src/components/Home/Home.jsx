import { useState } from "react"
import './Home.scss'
import { Button, TextField } from "@mui/material"


export default function Home({ onClick }) {

    const [username, setUsername] = useState('')

    const usuarios = [
        {
            id: '3',
            username,
            age: 23,
            sex: 'M'
        },
        {
            id: '2',
            username: 'Alana',
            age: 23,
            sex: 'F'
        },
        {
            id: '1',
            username: 'Random',
            age: 92,
            sex: 'M'
        }
    ]

    function updateUsername(username) {
        setUsername(username)
    }

    let userInput

    return (
        <>
            <div id="home">

                <h1>Bem vindo à Home</h1>
                <div id="hooks">
                    <label>Insira o nome do usuário: </label>
                    <TextField id="standard-basic" label="Nome" variant="filled" onChange={e => updateUsername(e.target.value)} />
                    <Button variant="contained" color="error" onClick={() => updateUsername(userInput)}>
                        Alterar nome
                    </Button>
                </div>
                <ul className="list-users">
                    {
                        usuarios.map(usuario =>
                            <li key={usuario.id}>{usuario.username}, {usuario.age}, {usuario.sex}</li>
                        )
                    }
                </ul>

            </div>
        </>
    )
}