import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from "../../../src/store/journal";

describe('Pruebas en JournalThunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());


    test('startNewNote debe crear una nueva nota en blanco', async () => {

        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid: uid } });

        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            "body": "",
            "date": expect.any(Number),
            "id": expect.any(String),
            "imageUrls": expect.any(Array),
            "title": "",
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            "body": "",
            "date": expect.any(Number),
            "id": expect.any(String),
            "imageUrls": expect.any(Array),
            "title": "",
        }));

        //Borrar de firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePromises = [];
        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)));
        await Promise.all(deletePromises);
    });

    
});
