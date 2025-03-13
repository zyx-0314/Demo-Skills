"use client"

import AlertUnderWorks from '@/components/elements/alert/under-works';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function Home() {

  return (
    <>
      <div className="bg-gray-500 flex justify-center items-center w-full h-dvh">
        <AlertUnderWorks />
      </div>
    </>
  );
}
