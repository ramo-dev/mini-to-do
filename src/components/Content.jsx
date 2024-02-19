import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contentStyles.css'

const Content = () => {
    const [note, setNote] = useState('');
    const [notesList, setNotesList] = useState(() => {
        const savedNotes = localStorage.getItem('notes');
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notesList));
    }, [notesList]);

    function addNoteHandler(e) {
        e.preventDefault();
        if (note.trim() === '') {
            alert("Please enter a note");
        } else {
            setNotesList([...notesList, note]);
            setNote('');
            toast.success("Note added successfully!", { autoClose: 2000 });
        }
    }

    function deleteNoteHandler(index) {
        setNotesList(notesList.filter((_, i) => i !== index));
        toast.error("Note deleted successfully!", { autoClose: 2000 });
    }

    return (
        <div className="container">
            <div className="notes">
                <h1>Notes</h1>
                <hr />
                {notesList.length === 0 && <p style={{color:'#535bf2'}}>No notes available</p>}
                {notesList.map((note, index) => (
                    <div className="noteDetail" key={index}>
                        <p>{note}</p>
                        <button onClick={() => deleteNoteHandler(index)}>delete</button>
                    </div>
                ))}
            </div>

            <div className="content"> 
                <form onSubmit={addNoteHandler}>
                    <label>Add a note:</label><br/><br/>
                    <input type="text" name="note" value={note} onChange={(e) => setNote(e.target.value)} /><br/><br/>
                    <button type="submit">Add Note</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Content;
