import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNorte = () => {
    console.log('start new note');

    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        console.log({ uid });

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
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

export const startSavingNote = () => {
    return async( dispatch, getState ) => {
        
        dispatch( setSaving() );
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notas/${ note.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true } );
        dispatch( updateNote( note ) );

    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ) )
        }
        console.log({fileUploadPromises});
        const photosURLS = await Promise.all( fileUploadPromises );
        console.log(photosURLS);
        dispatch( setPhotosToActiveNote( photosURLS ) );
    }
}

export const startDeletingNote = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notas/${ note.id }` );
        await deleteDoc( docRef );

        dispatch( deleteNoteById( note.id ) );

    }
}