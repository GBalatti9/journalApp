export const fileUpload = async( file ) => {
    console.log('estoy en file upload', file);
    if( !file ) throw new Error('No hay archivo');
    const cloudURL = 'https://api.cloudinary.com/v1_1/dsadgfahr/upload';

    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);
    console.log({ formData });
    try {
        console.log('entrando al try...');
        const resp = await fetch( cloudURL, {
            method: 'POST',
            body: formData
        });

        console.log({resp});
        if (!resp.ok) {
            throw new Error(resp)
        }

        const cloudResponse = await resp.json();

        console.log({cloudResponse});
        
        return cloudResponse.secure_url;
    } catch (error) {
        throw new Error( error );
    }
}