import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
    name: string;
    avatar: JSX.Element;
    link: string;
    description?: string; // Optional description field
}

const AgentProfileCard: React.FC<ProfileCardProps> = ({ name, avatar, link, description }) => {
    return (
        <div className="relative group flex">
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" className="flex items-center justify-center">
                            {avatar}
                            <div>{name}</div>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <div className="w-80 h-30">
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-1 ml-2 block no-underline"
                            >
                                <div className="flex items-center justify-start gap-2">
                                    {avatar}
                                    <div className="mr-2 mt-1 flex justify-center items-center text-sm font-semibold text-gray-800">
                                        {name}
                                        <ArrowRight weight="bold" className="ml-1" />
                                    </div>
                                </div>
                            </a>
                            {description && (
                                <p className="mt-2 ml-6 text-sm text-gray-600 line-clamp-2">
                                    {description || "A YCK agent"}
                                </p>
                            )}
                        </div>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default AgentProfileCard;
