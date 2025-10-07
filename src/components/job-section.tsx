import type { Job } from "@/interfaces/job";
import JobCard from "./job-card";
interface JobSectionProps {
  title: string;
  linkText: string;
  jobs: Job[];
}
export default function JobSection({ title, linkText, jobs }: JobSectionProps) {
  return (
    <section className="space-y-3.5">
      <div className="flex items-center flex-wrap gap-3.5">
        <h2 className="text-lg text-accent-foreground font-medium">
          {title}
        </h2>
        <a
          className="text-lg text-primary font-medium underline"
          href="#"
        >
          {linkText}
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {jobs.map((job, idx) => (
          <JobCard job={job} key={idx} />
        ))}
      </div>
    </section>
  );
}
