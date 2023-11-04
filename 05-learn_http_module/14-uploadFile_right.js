const http = require('http');
const fs = require('fs');
const path = require('path');
// 1.create a server
const server = http.createServer((req, res) => {
    req.setEncoding('binary');
    let formData = '';
    res.setHeader('Access-Control-Allow-Origin', '*');

    req.on('data', (data) => {
        // 1、get all formData
        formData += data;
    });
    const boundary = req.headers['content-type'].split(';')[1].replace('boundary=', '');
    req.on('end', () => {
        console.log(formData);
        // 2、 handle formData
        const fileType = 'image/jpeg';
        const index = formData.indexOf(fileType);
        let result = formData.slice(index + fileType.length);

        // action！！！  boundary's front and back will filled '--'
        const endIndex = result.indexOf(`--${boundary.trim()}--`);
        result = result.slice(0, endIndex);
        console.log(result);

        // 3、save file
        // 3.1
        // const buffer = Buffer.from(result, 'binary');
        // const writeStream = fs.createWriteStream(path.join(__dirname, '/success.jpg'));
        // writeStream.write(buffer, (err) => {
        //     if (err) {
        //         console.log(err);
        //         res.end('file upload error!');
        //         return;
        //     }
        //     res.end('file upload success!');
        // });


        // 3.2
        fs.writeFile(path.join(__dirname, '/success.jpg'), result, 'binary', (err) => {
            if (err) {
                console.log(err);
                res.end('file upload error!');
                return;
            }
            res.end('file upload success!');
        });
    });
});

// 2.start the server and set port
// port scope 1024 - 65535  2*10 - 256*256
server.listen(8080, () => {
    console.log('Server started successfully!');
});



// image format

/**
 * ----------------------------080132910408222758705610
Content-Disposition: form-data; name="name"

hly
----------------------------080132910408222758705610
Content-Disposition: form-data; name="file"; filename="u=4080826490,615918710&fm=193&f=GIF.jpg"
Content-Type: image/jpeg

ÿØÿàJFIFHHÿÛC		

 $.' ",#(7),01444'9=82<.342ÿÛC			

2!!22222222222222222222222222222222222222222222222222ÿÀ¢°"
 */