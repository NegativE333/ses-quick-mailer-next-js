import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,
    region: process.env.REGION,
});

const ses = new AWS.SES({apiVersion : '2010-12-10'});

export const checkVerificationStatus = (email: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const params = {
            Identities: [email]
        };

        ses.getIdentityVerificationAttributes(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const VerificationAttributes = data.VerificationAttributes;
                if (
                    VerificationAttributes &&
                    VerificationAttributes[email] &&
                    VerificationAttributes[email].VerificationStatus === "Success"
                ) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        });
    });
}
