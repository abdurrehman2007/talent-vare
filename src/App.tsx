import JobSection from "./components/job-section";
import Nav from "./components/nav";
import SearchSection from "./components/search-section";
import SidebarProfile from "./components/sidebar-profile";
import jobData from "./assets/jobs.json";

function App() {
  return (
    <>
      <div className="min-h-dvh">
        <Nav />
        <main className="mx-auto max-w-[1400px] px-4 pb-10 pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[350px_1fr]">
            <aside className="hidden md:block">
              <SidebarProfile />
            </aside>
            <section className="space-y-6">
              <SearchSection />
              <JobSection
                title="Featured Jobs"
                linkText="See Featured Jobs"
                jobs={jobData.featuredJobs}
              />
              <JobSection
                title="Recommended Jobs"
                linkText="See Recommended Jobs"
                jobs={jobData.recommendedJobs}
              />
              <JobSection
                title="Latest Jobs"
                linkText="See Latest Jobs"
                jobs={jobData.latestJobs}
              />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
