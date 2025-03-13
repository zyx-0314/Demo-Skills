"use client"

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

interface AlertUnderworksProps {
    title?: string
    content?: string
    subHeading?: string

}

export default function AlertUnderWorks({
    title = "Heads up!",
    content,
    subHeading = "🏗️🚧Page Under Construction🚧👷"
}: AlertUnderworksProps) {
    return (
        <>
            <Alert className="w-fit">
                <Terminal className="h-4 w-4" />
                <AlertTitle className='text-xl'>{title}</AlertTitle>
                <AlertDescription>
                    <h3 className='text-lg'>{subHeading}</h3>
                    {content && (
                        <p>{content}</p>
                    )}
                </AlertDescription>
            </Alert>
        </>
    );
}
