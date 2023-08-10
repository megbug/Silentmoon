import '../config/config.js';

import fs from 'fs';
import mongoose from 'mongoose';

import data from './seed_data_img.json' assert {type: 'json'};
import { Image } from '../model/Image.js';

mongoose.connect(process.env.DB);

// GridFSBucket provides methods for working with files stored in the bucket
// creating this bucket allows to perfom tasks as retrieving, updating etc. in the MongoDB using GridFS storage system
// mongoose.connect represents the active MongoDB connection managed by mongoose 
let gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection, {
    bucketName: 'imagebucket'
});

console.log('Connected to MongoDB');

for (let imageData of data.images) {

    // upload imagefile to mongoDB using gridFS - filepath and filename are given by seed_data_img.json
    // pipe offers reading from source and uploading to destination simultaneously
    await fs.createReadStream(imageData.filepath).pipe(gridFSBucket.openUploadStream(imageData.filename));

    // stat gets the statistical info about the file (e.g. filesize, creationtime, etc.)
    const stat = await fs.statSync(imageData.filepath);


    let image = new Image({
        title: imageData.title,
        level: imageData.level,
        category: imageData.category,
        filename: imageData.filename,
        filesize: stat.size,
        description: imageData.description
    });

    await image.save();
}
// mongoose.disconnect();