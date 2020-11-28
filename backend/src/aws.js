const AWS = require('aws-sdk');


//Configure AWS
const credentials = new AWS.SharedIniFileCredentials({profile:process.env.AWS_PROFILE});
AWS.config.credentials = credentials


const s3 = new AWS.S3({
    signatureVersion:'v4',
    region: process.env.AWS_REGION,
    params:{Bucket:process.env.AWS_FILESTORE}
})

/**
 * @description generates an aws signed url to retrieve an item
 * @params {string} key - the filename
 * @return {string} a signed url
 */
function getSignedUrl(key){
    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('getObject',{
        Bucket: process.env.AWS_FILESTORE,
        Key:key,
        Expires: signedUrlExpireSeconds
    })

    return url;
}

/**
 * @description generates an aws signed url to upload an item
 * @params {string} key - the filename
 * @return {string} a signed url
 */
function getPutSignedUrl(key){
    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('putObject',{
        Bucket:process.env.AWS_FILESTORE,
        Key:key,
        Expires:signedUrlExpireSeconds
    })

    return url;
}


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

module.exports = {
    getSignedUrl,
    getPutSignedUrl,
    deleteFiles
}
