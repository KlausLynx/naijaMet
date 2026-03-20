import { Spinner } from "flowbite-react";

export default function PageLoader() {
    return (
        <div className="flex items-center justify-center min-h-screen text-blue-600">
            <Spinner className="fill-amber-900" size="xl" />
        </div>
    )
}