import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Pruebas en el authSlice', () => {

    test('Debe regresar el estado inicial y llamarse "auth"', () => { 
        const state = authSlice.reducer( initialState, {} )

        expect( state ).toEqual( initialState );
        expect( authSlice.name ).toBe('auth');
    });

    test('Debe realizar la autenticación', () => { 

        const state = authSlice.reducer( initialState, login( demoUser ) );
        expect( state ).toEqual({
            status: 'authenticated', // 'not-authenticated', 'authenticated'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: undefined,
        })
        
    });
    
    test('Debe realizar el Logout', () => {
        
        const state = authSlice.reducer( authenticatedState, logout() );
        expect( state ).toEqual({
            status: 'not-authenticated', // 'not-authenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        })

    });
    test('Logout y mensaje de error', () => {

        const errorMessage = 'Credenciales incorrectas'
        const state = authSlice.reducer( authenticatedState, logout({ errorMessage }) );
        expect( state ).toEqual({
            status: 'not-authenticated', // 'not-authenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        })
    });

    test('Cambiar estado a checking', () => {
        const state = authSlice.reducer( authenticatedState, checkingCredentials() );
        expect( state.status ).toBe('checking');
    })

})