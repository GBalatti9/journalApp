import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
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
        addNewEmptyNote: ( state, action ) => {

        },
        setActiveNote: ( state, action ) => {

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
        deleteNoteById } = journalSlice.actions;