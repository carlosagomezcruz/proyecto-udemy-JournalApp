import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'dnclvdwrx',
    api_key: '972548299743632',
    api_secret: 'Y0SHWOaq3gtN8XYKLRMGOMd8s1w',
    secure: true
});


describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob],'foto.jpg'); 

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');
        
        const segments = url.split('/');
        const imageId = segments[segments.length -1].replace('.jpg','');
        
        const cloudResp = await cloudinary.api.delete_resources(['journal-app/' + imageId], { resource_type: 'image'});

    });

    test('debe de retornar null', async() => {

        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( null );
        
    });


    
});
