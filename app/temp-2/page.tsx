"use client";

import React, { useState } from 'react';
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { FeedWrapper } from "@/components/wrapper/feed-wrapper";
import { StickyWrapper } from "@/components/wrapper/sticky-wrapper";
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Temp2Page = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        insta: '',
    });

    const handleSubmit = () => {
        // Handle form submission
    }

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    console.log(formData.title);

    return (  
        <div className="flex gap-[48px] px-6">
            <StickyWrapper>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
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
                        value={formData.content}
                        onChange={handleChange}
                        id='content'
                    />
                </div>
                <FormInput
                    id="facebook"
                    label="Facebook link"
                    value={formData.facebook}
                    onChange={handleChange}
                />
                <FormInput
                    id="twitter"
                    label="Twitter link"
                    value={formData.twitter}
                    onChange={handleChange}
                />
                <FormInput
                    id="linkedin"
                    label="Linked In link"
                    value={formData.linkedin}
                    onChange={handleChange}
                />
                <FormInput
                    id="insta"
                    label="Instagram link"
                    value={formData.insta}
                    onChange={handleChange}
                />
                <FormSubmit
                    className="w-full"
                    // isProcessing={pending}
                >
                    Submit
                </FormSubmit>
            </form>
            </StickyWrapper>
            <FeedWrapper>
                {(formData.title !== "" || formData.content !== "") ? (
                    <div className="flex flex-col items-center justify-center bg-[#F2F2F2] p-4 text-center rounded-md">
                        <h1 className="text-3xl font-semibold">
                            {formData.title}
                        </h1>
                        {formData.content && (
                            <>
                                <Separator 
                                    className="my-4 h-0.5"
                                />
                                <p className='px-8'>
                                    {formData.content}
                                </p>
                            </>
                        )}
                        <Separator 
                            className="my-4 h-0.5"
                        />
                    </div>
                ) : (
                    <div>
                        <h2 className='text-5xl font-semibold text-start w-[70%] leading-[4rem] pl-2'>
                            Begin by entering information into the input fields to compose your email.
                        </h2>
                    </div>
                )}
            </FeedWrapper>
        </div>
    );
}
 
export default Temp2Page;
