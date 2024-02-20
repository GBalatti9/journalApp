import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNorte = () => {
    console.log('start new note');

    return async( dispatch, getState ) => {
        const { uid } = getState().auth
        console.log({ uid });

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notas` ) );
        const setDocResp = await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( savingNewNote() );
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El uid del usuario no existe')
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );

    }
}