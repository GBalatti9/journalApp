import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

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