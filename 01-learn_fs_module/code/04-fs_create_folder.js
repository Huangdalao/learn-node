const fs = require('fs');


// create folder
fs.mkdir('../assets/images', (err) => {
    if (err) {
        console.log('Error create folder', err);
    }
    console.log('Folder created successfully');
});