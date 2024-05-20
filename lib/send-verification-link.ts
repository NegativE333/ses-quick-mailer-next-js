import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,
    region: process.env.REGION,
});

const ses = new AWS.SES({apiVersion : '2010-12-10'});

export const sendVerificationLink = (email: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const params = {
            EmailAddress: email
        };

        ses.verifyEmailAddress(params, (err, data) => {
            if(err){
                reject(err);
            }
            else{
                resolve(true);
            }
        })
        
    });
}
