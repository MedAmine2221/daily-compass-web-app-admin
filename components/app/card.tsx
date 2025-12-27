"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CardApp({title, stat, icon}: {title: string, stat: any, icon: React.ReactNode}) {    
    return (
        <Card className="w-100 m-4 bg-linear-to-r from-blue-950 to-[#4e4db0] rounded-lg">
            <CardHeader className="flex flex-row justify-between p-4">
                <p className="text-white text-md mr-2">{title}</p>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    {icon}
                </div>
            </CardHeader>
            <CardBody className="p-4">
                <p className="text-4xl font-bold text-white">{stat}</p>
            </CardBody>
            <CardFooter className="p-4">
                <p className="text-white">
                    Increased from last month.
                </p>
            </CardFooter>
        </Card>
    )
}