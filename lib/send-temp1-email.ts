import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,
    region: process.env.REGION,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export const sendTemp1Emails = (
    title: string,
    emails: string[],
    description: string,
    faceBook: string,
    twitter: string,
    linkedIn: string,
    insta: string,
): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const params = {
            Destination: {
                ToAddresses: emails
            },
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: `
                        <!DOCTYPE html>

                        <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
                        <head>
                        <title></title>
                        <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
                        <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
                        <style>
                                * {
                                    box-sizing: border-box;
                                }
                        
                                body {
                                    margin: 0;
                                    padding: 0;
                                }
                        
                                a[x-apple-data-detectors] {
                                    color: inherit !important;
                                    text-decoration: inherit !important;
                                }
                        
                                #MessageViewBody a {
                                    color: inherit;
                                    text-decoration: none;
                                }
                        
                                p {
                                    line-height: inherit
                                }
                        
                                .desktop_hide,
                                .desktop_hide table {
                                    mso-hide: all;
                                    display: none;
                                    max-height: 0px;
                                    overflow: hidden;
                                }
                        
                                .image_block img+div {
                                    display: none;
                                }
                        
                                @media (max-width:520px) {
                        
                                    .desktop_hide table.icons-inner,
                                    .social_block.desktop_hide .social-table {
                                        display: inline-block !important;
                                    }
                        
                                    .icons-inner {
                                        text-align: center;
                                    }
                        
                                    .icons-inner td {
                                        margin: 0 auto;
                                    }
                        
                                    .mobile_hide {
                                        display: none;
                                    }
                        
                                    .row-content {
                                        width: 100% !important;
                                    }
                        
                                    .stack .column {
                                        width: 100%;
                                        display: block;
                                    }
                        
                                    .mobile_hide {
                                        min-height: 0;
                                        max-height: 0;
                                        max-width: 0;
                                        overflow: hidden;
                                        font-size: 0px;
                                    }
                        
                                    .desktop_hide,
                                    .desktop_hide table {
                                        display: table !important;
                                        max-height: none !important;
                                    }
                                }
                            </style>
                        </head>
                        <body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
                        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-image: none; background-position: top left; background-size: auto; background-repeat: no-repeat;" width="100%">
                        <tbody>
                        <tr>
                        <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                        <tr>
                        <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px; margin: 0 auto;" width="500">
                        <tbody>
                        <tr>
                        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                        <table border="0" cellpadding="10" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tr>
                        <td class="pad">
                        <h1 style="margin: 0; color: #141315; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 45.6px;"><span class="tinyMce-placeholder">${title}</span></h1>
                        </td>
                        </tr>
                        </table>
                        <table border="0" cellpadding="10" cellspacing="0" class="divider_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tr>
                        <td class="pad">
                        <div align="center" class="alignment">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tr>
                        <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span> </span></td>
                        </tr>
                        </table>
                        </div>
                        </td>
                        </tr>
                        </table>
                        <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                        <tr>
                        <td class="pad">
                        <div style="color:#101112;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
                            ${description}
                        </div>
                        </td>
                        </tr>
                        </table>
                        <table border="0" cellpadding="10" cellspacing="0" class="divider_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tr>
                        <td class="pad">
                        <div align="center" class="alignment">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tr>
                        <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span> </span></td>
                        </tr>
                        </table>
                        </div>
                        </td>
                        </tr>
                        </table>
                        <table border="0" cellpadding="10" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tr>
                        <td class="pad">
                        <div align="center" class="alignment">
                        <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="144px">
                        <tr>
                        <td style="padding:0 2px 0 2px;"><a href="${faceBook === "" ? "https://www.facebook.com" : faceBook}" target="_blank"><img alt="Facebook" height="auto" src="https://i.pinimg.com/736x/d2/59/45/d25945e34d2fd792dd6ce72b883810b8.jpg" style="display: block; height: auto; border: 0;" title="facebook" width="32"/></a></td>
                        <td style="padding:0 2px 0 2px;"><a href=${twitter === "" ? "https://www.linkedin.com/" : twitter} target="_blank"><img alt="Twitter" height="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4l-79-SAW7-V62svmyGxprpfEszzrPDHoCWCPhDygw&s" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
                        <td style="padding:0 2px 0 2px;"><a href=${linkedIn === "" ? "https://www.linkedin.com/" : linkedIn} target="_blank"><img alt="Linkedin" height="auto" src="https://cdn-icons-png.freepik.com/256/254/254394.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
                        <td style="padding:0 2px 0 2px;"><a href=${insta === "" ? "https://www.instagram.com/" : insta} target="_blank"><img alt="Instagram" height="auto" src="https://beautystreamslifestyle.com/wp-content/uploads/2020/04/crop-0-0-1084-1084-0-5391166-download-ig-logo-logo-ig-dog-crate-cover-png-icons-social-ig-logo-png-1084_1084_preview.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
                        </tr>
                        </table>
                        </div>
                        </td>
                        </tr>
                        </table>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
                        <tbody>
                        <tr>
                        <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #ffffff; width: 500px; margin: 0 auto;" width="500">
                        <tbody>
                        <tr>
                        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                        <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center;" width="100%">
                        <tr>
                        <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                        <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tr>
                        <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                        <!--[if !vml]><!-->
                        <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
                        </table>
                        </td>
                        </tr>
                        </table>
                        </td>
                        </tr>
                        </table>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        </td>
                        </tr>
                        </tbody>
                        </table><!-- End -->
                        </body>
                        </html>
                        `
                    },
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: `${title}`
                }
            },
            Source: "omtekade914@gmail.com"
        };

        ses.sendEmail(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    })
}