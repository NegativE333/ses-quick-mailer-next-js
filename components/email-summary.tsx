import { Separator } from "./ui/separator";


type Props = {
    total: number;
    verified: number;
    unverified: number;
}

export const EmailSummary = ({
    total,
    verified,
    unverified
}: Props) => {
    return (
        <div className='flex flex-col justify-center w-[95%] text-end items-end h-full'>
            <h1 className='text-3xl text-end font-semibold'>
                Summary
            </h1>
            <Separator className='my-4' />
            <div className='flex gap-4 flex-col'>
                <h2 className='text-xl'>
                    Total Emails :
                    <span className='font-bold'> {total}</span>
                </h2>
                <h2 className='text-xl'>
                    Verified Emails :
                    <span className='font-bold text-green-500'> {verified}</span>
                </h2>
                <h2 className='text-xl'>
                    Unverified Emails :
                    <span className='font-bold text-red-500'> {unverified}</span>
                </h2>
                <Separator />
                <h2 className='text-xl'>
                    Percentage of emails sent successfully :
                    <span className='font-bold text-gray-700'> {Math.round((verified / total) * 100)} %</span>
                </h2>
            </div>
            <Separator className="my-4"/>
            <div className='text-base pb-auto'>
                *Verification link is sent to unverified emails from AWS SES
            </div>
        </div>
    )
}