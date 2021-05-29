import React, {useState} from 'react'
import './AddSong.css'

export default function AddSong(){
    const [form, setForm] = useState({
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <div >
            <h2>Agrega una canción</h2>
            <form className="add_song">
                <label htmlFor="name">Nombre: </label>
                <input type="text" id="name" value={form.name} onChange={handleChange}/>
                <br/>
                <label htmlFor="imageUrl">URL de la imagen: </label>
                <input type="text" id="imageUrl" value={form.imageUrl} onChange={handleChange}/>
                <input type="submit"/>
            </form>
        </div>
    );
}