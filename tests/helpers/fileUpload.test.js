import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dsadgfahr',
    api_key: '837524781374978',
    api_secret: '5pRkC21MrsrGoFE_pPSDuCitlYg',
    secure: true,
})


describe('Pruebas en fileUpload', () => {

    test('Debe subir el archivo correctamente a cloudinary', async () => {

        const imageUrl = 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');
        console.log({ imageId });

        const cloudResp = await cloudinary.api.delete_resources([ 'journal-app/' + imageId ], { resource_type: 'image' });
        console.log(cloudResp);


    });


    test('Debe retornar null', async () => {

        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );

        expect( url ).toBe(null);
    });



})