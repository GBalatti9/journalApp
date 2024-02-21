import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { addNewEmptyNote, savingNewNote } from "../../../src/store/journal/journalSlice";
import { startNewNorte } from "../../../src/store/journal/thunks";
import { FirebaseDB } from "../../../src/firebase/config";


describe('Pruebas en Journal Thunls', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('startNewNote debe crear una nueva nota en blanco', async() => {

        const uid = "TEST-UID"
        getState.mockReturnValue({ auth: { uid: uid } });

        await startNewNorte()( dispatch, getState );

        expect( dispatch ).toHaveBeenCalledWith( savingNewNote() );
        // expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
        //     body: '',
        //     title: '',
        //     id: expect.any( String ),
        //     date: expect.any( Number ),
        // }));

        const collectionRef = collection( FirebaseDB, `${ uid }/journal/notas` );
        const docs = await getDocs( collectionRef );

        const deletePromises = [];

        docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref ) ));

        await Promise.all( deletePromises );
    });


})