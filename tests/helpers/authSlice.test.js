import { authSlice } from "../../src/store/auth/authSlice"
import { initialState } from "../fixtures/authFixtures";

describe('Pruebas en el authSlice', () => {

    test('Debe regresar el estado inicial y llamarse "auth"', () => { 
        const state = authSlice.reducer( initialState, {} )

        expect( state ).toEqual( initialState );
        expect( authSlice.name ).toBe('auth');
    })

})