'use client';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Separator } from '../ui/separator';

export const Donate = () => {
  const [copiedItems, setCopiedItems] = useState<Record<string, boolean>>({});

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItems(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedItems(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-6 max-w-3xl mx-auto text-pretty bg-gray-100 rounded-lg p-6">
        <p className=" mb-4">
          If you like to make a contribution to our charitable causes, you can
          do a bank transfer to the account below
        </p>
        <Separator className="my-4" />
        <p className="flex items-center justify-center gap-2">
          Account Name:{' '}
          <span className="font-bold flex items-center gap-1">
            Rory Burns Testimonial Year
            <button
              onClick={() =>
                copyToClipboard('Rory Burns Testimonial Year', 'accountName')
              }
              className="p-1 hover:bg-gray-200 bg-gray-100 rounded-full transition-colors"
              title="Copy to clipboard"
            >
              {copiedItems['accountName'] ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </span>
        </p>
        <Separator className="my-4" />
        <p className="flex items-center justify-center gap-2">
          Bank:{' '}
          <span className="font-bold flex items-center gap-1">
            HSBC
            <button
              onClick={() => copyToClipboard('HSBC', 'bank')}
              className="p-1 hover:bg-gray-200 bg-gray-100 rounded-full transition-colors"
              title="Copy to clipboard"
            >
              {copiedItems['bank'] ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </span>
        </p>
        <Separator className="my-4" />
        <p className="flex items-center justify-center gap-2">
          Account Number:{' '}
          <span className="font-bold flex items-center gap-1">
            82307235
            <button
              onClick={() => copyToClipboard('82307235', 'accountNumber')}
              className="p-1 hover:bg-gray-200 bg-gray-100 rounded-full transition-colors"
              title="Copy to clipboard"
            >
              {copiedItems['accountNumber'] ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </span>
        </p>
        <Separator className="my-4" />
        <p className="flex items-center justify-center gap-2">
          Sort Code:{' '}
          <span className="font-bold flex items-center gap-1">
            40-05-20
            <button
              onClick={() => copyToClipboard('40-05-20', 'sortCode')}
              className="p-1 hover:bg-gray-200 bg-gray-100 rounded-full transition-colors"
              title="Copy to clipboard"
            >
              {copiedItems['sortCode'] ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </span>
        </p>
        <Separator className="my-4" />
        <p className="mt-4">
          Please use your name as the reference and send an email to{' '}
          <a href="mailto:me@lucydonovan.com" className="underline">
            me@lucydonovan.com
          </a>{' '}
          to let us know you&apos;ve made a donation.
        </p>
        <p className="mt-4 text-xl font-bold">Thank you!</p>
      </div>
    </>
  );
};
