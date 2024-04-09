"use client";

import React, { useState, useTransition } from 'react';
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { FeedWrapper } from "@/components/wrapper/feed-wrapper";
import { StickyWrapper } from "@/components/wrapper/sticky-wrapper";
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ImageUpload } from '@/components/form/image-upload';
import Image from 'next/image';
import Papa from 'papaparse';
import { toast } from 'sonner';
import { sendEmails } from '@/action/send-emails';
import { EmailSummary } from '@/components/email-summary';

const Temp2Page = () => {
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const [pending, startTransaction] = useTransition();
    const [verifiedEmails, setVerifiedEmails] = useState<string[]>();
    const [unverifiedEmails, setUnVerifiedEmails] = useState<string[]>();
    const [total, setTotal] = useState<number>();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        file: '',
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const formDataR = new FormData(event.target);
        const file = formDataR.get("file");

        if(file){
            Papa.parse(file, {
                complete: function(res){
                    let emails = res.data.map((item: any) => item[0]) as string[];
                    startTransaction(() => {
                        sendEmails({
                            title: formData.title, 
                            description: formData.description, 
                            emails, 
                            facebook: "", 
                            twitter: "", 
                            insta: "", 
                            linkedin: "", 
                            type: 2, 
                            imageUrl: imageUrl ?? ""
                        })
                        .then((data) => {
                            setTotal(emails.length);
                            setVerifiedEmails(data.verifiedEmails);
                            setUnVerifiedEmails(data.unVerifiedEmails);
                            formData.title = "";
                            formData.file = "";
                            formData.description = "";
                            setImageUrl("");
                            toast.success("Emails sent successfully.");
                        })
                        .catch(() => {
                            toast.error("Something went wrong.");
                        })
                    })
                }
            })
        }
    }

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    return (  
        <div className="flex gap-[48px] px-6">
            <StickyWrapper>
            <form className="space-y-4 flex flex-col justify-center my-auto" onSubmit={handleSubmit}>
                <FormInput
                    id="title"
                    label="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <div>
                    <Label className="text-xs font-semibold text-neutral-700">
                        Content
                    </Label>
                    <Textarea
                        value={formData.description}
                        onChange={handleChange}
                        id='description'
                    />
                </div>
                <div>
                    <Label className="text-xs font-semibold text-neutral-700">
                        Choose Image
                    </Label>
                    <ImageUpload
                        value={imageUrl}
                        onChange={(value) => setImageUrl(value)}
                    />
                </div>
                <FormInput
                    id="file"
                    type='file'
                    label="Emails list"
                    value={formData.file}
                    onChange={handleChange}
                />
                <FormSubmit
                    className="w-full"
                    isProcessing={pending}
                >
                    Send
                </FormSubmit>
            </form>
            </StickyWrapper>
            <FeedWrapper>
                {(formData.title !== "" || formData.description !== "" || imageUrl) ? (
                    <div className="flex flex-col items-center justify-center bg-[#F2F2F2] p-4 text-center rounded-md">
                        <h1 className="text-3xl font-semibold">
                            {formData.title}
                        </h1>
                        {formData.description && (
                            <>
                                <Separator 
                                    className="my-4 h-0.5"
                                />
                                <p className='px-8'>
                                    {formData.description}
                                </p>
                            </>
                        )}
                        <Separator 
                            className="my-4 h-0.5"
                        />
                        {imageUrl && (
                            <Image 
                                src={imageUrl}
                                alt='image'
                                width={500}
                                height={500}
                            />
                        )}
                    </div>
                ) : (
                    <div className='w-full h-full'>
                        {(verifiedEmails && unverifiedEmails && total) && (verifiedEmails?.length > 0 || unverifiedEmails?.length > 0) 
                            ? 
                        (
                            <EmailSummary 
                                total={total}
                                verified={verifiedEmails.length}
                                unverified={unverifiedEmails.length}
                            />
                        ) : (
                            <h2 className='text-5xl font-semibold text-end w-[90%] leading-[4rem] pl-2 h-full flex justify-center items-center'>
                                Begin by entering information into the input fields to compose your email.
                            </h2>
                        )}
                    </div>
                )}
            </FeedWrapper>
        </div>
    );
}
 
export default Temp2Page;
