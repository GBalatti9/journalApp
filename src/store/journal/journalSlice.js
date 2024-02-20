import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: {
            id: 'ABC1234',
            title: '',
            body: '',
            date: 1234567,
            imageUrls: [],
        },
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload
        },
        setNotes: ( state, action ) => {

        },
        updateNote: ( state, action ) => {
            
        },
        deleteNoteById: ( state, action ) => {

        },
    }
});
export const { 
        addNewEmptyNote,
        setActiveNote,
        setNotes,
        updateNote,
        deleteNoteById,
        savingNewNote } = journalSlice.actions;