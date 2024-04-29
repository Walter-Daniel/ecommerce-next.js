'use client'

export default function ErrorBoundary({
    error,
    reset,
}: {
    error:Error;
    reset: () =>void;
}) {
    return(
        <div className="w-100 h-[600px]">
            <div>{error.message}</div>
            <button onClick={reset}>Try Again</button>
        </div>
    )
}