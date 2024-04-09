import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
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
