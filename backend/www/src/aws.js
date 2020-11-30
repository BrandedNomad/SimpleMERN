/**
 * @overview  This file contains methods used to interact with the AWS file store
 *
 */

const AWS = require('aws-sdk');


//Configure AWS credentials
// credentials are derived from the configured AWS profile stored locally
if(process.env.AWS_PROFILE !== "DEPLOYED"){
    const credentials = new AWS.SharedIniFileCredentials({profile:process.env.AWS_PROFILE});
    AWS.config.credentials = credentials
}



//initializing a new S3 instance used to connect to aws fileStore
const s3 = new AWS.S3({
    signatureVersion:'v4',
    region: process.env.AWS_REGION,
    params:{Bucket:process.env.AWS_FILESTORE}
})

/**
 * @function
 * @description generates an aws signed url that will be used to retrieve an item from the file store.
 * @params {string} key - the filename
 * @return {string} a signed url
 */
function getSignedUrl(key){
    const signedUrlExpireSeconds = 60 * 5 // valid for 300 seconds

    const url = s3.getSignedUrl('getObject',{
        Bucket: process.env.AWS_FILESTORE, //name of the S3 bucket
        Key:key, //file name
        Expires: signedUrlExpireSeconds
    })

    return url;
}

/**
 * @function
 * @description generates an aws signed url that will be used to upload an item to the file store.
 * @params {string} key - the filename
 * @return {string} a signed url
 */
function getPutSignedUrl(key){
    const signedUrlExpireSeconds = 60 * 5 //valid for 300 seconds

    const url = s3.getSignedUrl('putObject',{
        Bucket:process.env.AWS_FILESTORE, //name of S3 bucket
        Key:key, //name of the file
        Expires:signedUrlExpireSeconds
    })

    return url;
}

/**
 * @function
 * @description Deletes a file in the file store.
 * @param {string} key -name of file to be deleted
 * @return {}
 */
function deleteFiles(key){
    s3.deleteObject({
        Key:key
    },(err,data)=>{
        if(data){
            console.log("File deleted successfully")
        } else {
            console.log("Check if you have sufficient permissions", err)
        }
    })
}

//exports functions
module.exports = {
    getSignedUrl,
    getPutSignedUrl,
    deleteFiles
}
