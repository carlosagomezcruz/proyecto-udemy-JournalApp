import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth/authSlice'
import { demoUser, initialState, authenticatedState } from '../../fixtures/authFixtures';

describe('Pruebas en authSlice', () => {

    test('Debe regresar el estado inicial y llamarse "auth', () => {

        const state = authSlice.reducer(initialState, {});

        expect(state).toEqual(initialState);
        expect(authSlice.name).toBe('auth');

    });

    test('Debe realizar la autenticacion', () => {

        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });
    });

    test('Debe realizar el logout sin argumentos', () => {

        const state = authSlice.reducer(authenticatedState, logout());

        expect(state).toEqual({
            status: 'non-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });

    });

    test('Debe realizar el logout y mostrar un mensaje de error', () => {

        const errorMessag = 'Credenciales no son correctas';

        const state = authSlice.reducer(authenticatedState, logout({ errorMessage: errorMessag }));
        
        expect(state).toEqual({
            status: 'non-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessag
        });

    });

    test('Debe cambiar el estado a checking', () => {
        const state = authSlice.reducer(authenticatedState, checkingCredentials);
        expect(state.status).toBe('checking');

    });


})
