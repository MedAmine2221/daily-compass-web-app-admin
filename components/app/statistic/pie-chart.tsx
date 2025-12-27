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

export const description = "A pie chart with no separator"

const chartData = [
  { title: "Free Users", number: 40, fill: "#4e4db0" },
  { title: "Paid Users", number: 60, fill: "#6b69d1" },
]

const chartConfig = {
  chrome: {
    label: "Free Users",
  },
  safari: {
    label: "Paid Users",
  },

} satisfies ChartConfig

export function ChartPie() {
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
                data={chartData}
                dataKey="number"
                nameKey="title"
                stroke="0"
            >
                {chartData.map((entry, index) => (
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
