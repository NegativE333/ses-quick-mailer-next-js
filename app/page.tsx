import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-full flex">
      <div className="flex h-full items-center w-[70%]">
        <div className="flex items-start flex-col justify-center text-start  p-8 gap-2 bg-neutral-200/10 shadow-xl rounded-xl h-fit m-4">
          <h1 className="text-start text-4xl">
            Welcome to
            <span className="font-semibold"> SES QuickMailer </span>
          </h1>
          <Separator className="my-1"/>
          <p className="text-lg leading-8 text-justify">
            <span className="font-semibold">SES QuickMailer</span> provides user-friendly email marketing solutions that empower businesses to achieve their marketing goals efficiently and effectively.
          </p>
          <Separator className="my-1"/>
          <p className="text-lg leading-8 text-justify">
          At <span className="font-semibold"> SES QuickMailer</span>, we prioritize deliverability and security in all our email communications. By leveraging AWS SES&apos;s advanced features and best practices, we guarantee that emails are delivered promptly, securely, and reliably to our users inboxes.
          </p>
          <Separator className="my-1"/>
          <p className="text-lg leading-8 text-justify">
            Use <span className="font-semibold"> SES QuickMailer </span> today and experience the power of AWS SES for seamless email communications!
          </p>
        </div>
      </div>
      <div className="w-[45%] flex items-center justify-center flex-col h-full">
        <Image 
          src="/send-email-1.svg"
          alt="send email"
          width={400}
          height={400}
        />
        <Button 
          className="font-semibold"
          variant="secondary" 
          size="lg" 
          asChild
        >
          <Link href="/temp-1">
            Send Emails
          </Link>
        </Button>
      </div>
    </div>
  );
}
