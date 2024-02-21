export const fileUpload = async( file ) => {
    // if( !file ) throw new Error('No hay archivo');
    if( !file ) return null;
    const cloudURL = 'https://api.cloudinary.com/v1_1/dsadgfahr/upload';

    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);
    try {
        const resp = await fetch( cloudURL, {
            method: 'POST',
            body: formData
        });

        if (!resp.ok) {
            throw new Error(resp)
        }

        const cloudResponse = await resp.json();
        
        return cloudResponse.secure_url;
    } catch (error) {
        // throw new Error( error );
        return null;
    }
}