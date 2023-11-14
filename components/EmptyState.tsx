"use client";

import { useRouter } from "next/navigation";
import { Button, Heading } from ".";

interface EmptyStateProps {
    title?: string,
    subtitle?: string,
    showReset?: boolean,
}


const EmptyState: React.FC<EmptyStateProps> = ({
    title = "No exact matches",
    subtitle = "Try changing or removing some of your filters",
    showReset
}) => {

    const router = useRouter();

    return (
        <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
            <Heading
                title={title}
                subtitle={subtitle}
                center
            />
            <div className="">
                {showReset && (
                    <Button
                        outline
                        label="Remove all filters"
                        onClick={() => router.push("/")}
                    />
                )}
            </div>
        </div>
    )
}

export default EmptyState