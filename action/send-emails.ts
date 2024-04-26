"use server";

import { db } from "@/lib/db";
import { sendTemp1Emails } from "@/lib/send-temp1-email";
import { sendTemp2Emails } from "@/lib/send-temp2-email";
import { sendVerificationLink } from "@/lib/send-verification-link";
import { checkVerificationStatus } from "@/lib/verify-emails";
import { format } from 'date-fns';
import { revalidatePath } from "next/cache";

type Props = {
    title: string;
    description: string;
    emails: string[];
    facebook: string;
    twitter: string;
    linkedin: string;
    insta: string;
    imageUrl: string;
    type: number;
}

export const sendEmails = async ({
    title,
    description,
    emails,
    facebook,
    twitter,
    linkedin,
    insta,
    imageUrl,
    type
}: Props) => {

    let verifiedEmails: string[] = [];
    let unVerifiedEmails: string[] = [];
    let count = 0;
    let totalCount = emails.length;
    const day = format(new Date(), "d MMM");

    await Promise.all(emails.map(async (email) => {
        if(email !== ''){
            if(await checkVerificationStatus(email)){
                verifiedEmails.push(email);
            }
            else{
                unVerifiedEmails.push(email);
                await sendVerificationLink(email);
            }
        }
    }));

    if(type === 1){
        sendTemp1Emails(title, verifiedEmails, description, facebook, twitter, linkedin, insta);
    }
    else if(type === 2){
        sendTemp2Emails(title, verifiedEmails, description, imageUrl);
    }

    await db.analytics.create({
        data:{
            successCount: verifiedEmails.length,
            failureCount: unVerifiedEmails.length,
            templateCount: type,
            day
        }
    });

    revalidatePath("/");
    revalidatePath("/analytics");

    return {verifiedEmails: verifiedEmails, unVerifiedEmails: unVerifiedEmails, count: count, totalCount: totalCount};
}
