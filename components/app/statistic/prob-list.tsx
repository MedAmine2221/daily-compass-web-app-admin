"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import ProbCards from "./probleme-card";

const data = Array.from({ length: 20 }, (_, i) => i + 1);
const ITEMS_PER_PAGE = 3;

export default function ProbList() {
  const [page, setPage] = useState(1);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col items-center">
      {currentItems.map((n) => (
        <ProbCards key={n} />
      ))}

      <div className="flex gap-3 mt-4">
        <Button
          size="sm"
          isDisabled={page === 1}
          onPress={() => setPage(p => p - 1)}
        >
          Prev
        </Button>

        <span className="text-sm self-center">
          {page} / {totalPages}
        </span>

        <Button
          size="sm"
          isDisabled={page === totalPages}
          onPress={() => setPage(p => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
