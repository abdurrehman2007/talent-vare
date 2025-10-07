import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Job } from "@/interfaces/job";
import { Bookmark, Clock, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function JobCard({ job }: { job: Job }) {
  return (
    <Card className="py-2.5 px-5 border-[#E1E1E1]">
      <CardContent className="space-y-3 p-0">
        {job.isFeatured ? (
          <span className="text-[10px] font-semibold text-accent-foreground mb-1">
            Promoted
          </span>
        ) : null}

        <div className="flex items-start gap-2.5">
          <Avatar className="size-10 rounded-lg">
            <AvatarImage
              src="/images/profile.png"
              alt="Albert Flores"
              className=""
            />
            <AvatarFallback className="bg-secondary text-foreground">
              AF
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <div className="truncate text-sm font-medium">{job.title}</div>
            <div className="truncate text-xs">{job.company}</div>
          </div>
        </div>

        {/* inline meta */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3" /> <span>{job.location}</span>
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3" />{" "}
            <span>
              1 day ago |{" "}
              <span className="text-primary">{job.applicants} applicants</span>
            </span>
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-0.5 -me-3">
          <Button size="sm" className="bg-primary text-primary-foreground">
            Apply Now
          </Button>
          <Button
            variant="ghost"
            size="sm"
            aria-label="Submit"
            className="text-muted-foreground"
          >
            <Bookmark />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
