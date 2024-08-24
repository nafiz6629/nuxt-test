
// export default defineEventHandler(() => const apiImage = 'https://mislayer.com/public/img/no_profile.jpg'; )


// export default defineEventHandler(async (event) => {
//     const apiImage = 'https://mislayer.com/public/img';
//     return apiImage;
// })

// server/api/image.js
// export default defineEventHandler(async (event) => {
//     const url = 'https://mislayer.com/public/img/no_profile.jpg'

//     return await fetch(url, {
//         headers: {
//             mode: 'cors',
//             'access-control-allow-origin': '*',
//             'content-type': 'image/jpeg'
//         }
//     })
//         .then(res => {
//             return res.blob()
//         })
//         .then(resData => {
//             return resData;
//         })
// })

export default defineEventHandler(async (event) => {
    try {
        const response = await fetch('https://mislayer.com/public/img/no_profile.jpg');
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }
        const blob = await response.blob();
        return blob;
    } catch (error) {
        console.error('Error fetching image:', error);
        // Consider returning a default image or error message for the client
    }
});


