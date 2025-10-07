"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
interface BadgeProps {
  label: string;
}

function Badge({ label }: BadgeProps) {
  return (
    <span className="px-3.5 py-2 border border-accent-foreground rounded text-xs">
      {label}
    </span>
  );
}

export default function SearchSection() {
  return (
    <section className="py-3.5">
      <h1 className="text-accent-foreground text-lg font-semibold md:text-[1.375rem]">
        Find your Dream Job, <span className="text-primary">Albert!</span>
      </h1>
      <p className="mt-1 text-sm text-muted-foreground font-medium">
        Explore the latest job openings and apply for the best opportunities
        available today!
      </p>
      <div className="rounded-lg border bg-card p-5 mt-5">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-[1fr_220px_180px_auto]">
          <Input
            placeholder="Job Title, Company, or Keywords"
            className="sm:col-span-2 md:col-auto p-0 border-none shadow-none focus-visible:ring-0 bg-transparent text-center md:text-start"
            aria-label="Keywords"
          />
          <div className="flex justify-center md:border-l">
            <Select>
              <SelectTrigger className="border-none shadow-none focus-visible:ring-0 bg-transparent">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seattle">Seattle, USA (Remote)</SelectItem>
                <SelectItem value="nyc">New York, USA</SelectItem>
                <SelectItem value="london">London, UK</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-center md:border-l">
            <Select>
              <SelectTrigger className="border-none shadow-none focus-visible:ring-0 bg-transparent">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full-time</SelectItem>
                <SelectItem value="part">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="gap-2.5 bg-primary text-primary-foreground !px-7">
            <Search className="size-4" />
            Search
          </Button>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <span className="text-muted-foreground text-sm">Similar:</span>
        <Badge label="Frontend" />
        <Badge label="Backend" />
        <Badge label="Graphic Designer" />
      </div>
    </section>
  );
}
