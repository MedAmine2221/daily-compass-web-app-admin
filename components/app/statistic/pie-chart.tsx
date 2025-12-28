"use client";
import { Cell, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useMemo } from "react";

export const description = "A pie chart with no separator"



const chartConfig = {
  chrome: {
    label: "Free Users",
  },
  safari: {
    label: "Paid Users",
  },

} satisfies ChartConfig
type AppUser = {
  id: string;
  username: string;
  phoneNumber: string;
  lang: string;
  imageUrl: string;
  freePeriod: number;
  createdAt: string;
  address: string;
  goals: any[];
  validatedAccount: boolean;
};
export function ChartPie({ data }: { data: AppUser[] }) {
  console.log("dataaaaaaaaaa ",data);
  const pieData = useMemo(()=>{
    const total = data.length;
    const free = data.filter((item)=> item.freePeriod < 15).length;
    const paid = data.filter((item)=> item.freePeriod >= 15).length;
    return [
      { title: "Free Users", number: Number(((free/total) *100).toFixed(1)), fill: "#4e4db0" },
      { title: "Paid Users", number: Number(((paid/total) *100).toFixed(1)), fill: "#6b69d1" },
    ]
  },[data])
  console.log("pieData ",pieData);
  
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Separator None</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
                data={pieData}
                dataKey="number"
                nameKey="title"
                stroke="0"
            >
                {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                ))}
            </Pie>

          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Distribution of Free and Paid Users
        </div>
      </CardFooter>
    </Card>
  )
}
