import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { checkingAuthentication, startGoogleSingIn, startLoginWithEmailPassword, startLogout } from '../../../src/store/auth/thunks';
import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from '../../../src/firebase/providers';
import { demoUser } from '../../fixtures/authFixtures';
import { clearNotesLogout } from '../../../src/store/journal';

jest.mock('../../../src/firebase/providers');


describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe invocar el checkingCredentials', async () => {

        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());

    });

    test('startGoogleSingIn debe llamar checkingCredentials y login - Exito', async () => {

        const loginData = { ok: true, ...demoUser };
        await singInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSingIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    });

    test('startGoogleSingIn debe llamar checkingCredentials y logout - Error', async () => {

        const logoutData = { ok: false, errorMessage: 'Un error en Google' };
        await singInWithGoogle.mockResolvedValue(logoutData);

        await startGoogleSingIn()(dispatch);



        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(logoutData.errorMessage));

    });

    test('startLoginWithEmailPassword debe llamar checkingCredentials y login - Exito', async () => {

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    })

    test('startLogout debe llamar logoutFirebase, clearNotes y logout', async () => {

        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());
    })



});
