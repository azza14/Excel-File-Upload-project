const db = require('.././models');
const Tutorial = db.tutorials;

const readXlsxFile = require('read-excel-file/node');

const upload = async (req, res) => {
    try {
        if (req.file == undefined) {
            return res.status(400).send('Please upload an excel file!');
        }
        let path = __basedir + '/resources/static\assets/uploads/' + req.file.filename;
        readXlsxFile(path).then((rows) => {
            //skip Header
            rows.shift();

            let tutorials = [];

            rows.forEach((row) => {
                let tutorial = {
                    id: row[0],
                    title: row[1],
                    description: row[2],
                    published: row[3]
                };

                tutorials.push(tutorial);
            });

            Tutorial.bulkCreate(tutorials)
                .then(() => {
                    res.status(500).send({
                        message: ' upload file successfuly' + req.file.originname
                    });
                })
                .catch((err) => {
                    res.status(500).send({
                        message: "Fail to import data into database!",
                        err: err.message
                    });
                });
        });
    }catch(err){
        console.error(err);

        req.status(500).send({
            message: "Could not upload the file: " + req.file.originalname,
        });
    }
};

module.exports={upload}
