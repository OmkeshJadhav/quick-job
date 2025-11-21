import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { getJobs } from "@/api/apijobs";
import useFetch from "@/hooks/useFetch";
import { BarLoader } from "react-spinners";
import JobCard from "@/components/jobs/job-card";

const JobListing = () => {
    const [location, setLocation] = useState("");
    const [company_id, setCompany_id] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const { isLoaded } = useUser();

    const { fn: fnJobs, data: jobs, loading: loadingJobs } = useFetch(getJobs, {
        location,
        company_id,
        searchQuery,
    });

    console.log(jobs);

    useEffect(() => {
        fnJobs();
    }, [isLoaded, location, company_id, searchQuery]);

    // if (!isLoaded) {
    //     return < BarLoader className='mb-4' width={"100%"} color='#36d7b7' />
    // }

    return (
        <div className="p-4">
            <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">Latest Jobs</h1>

            {/* Add filters here */}

            {loadingJobs && (
                <BarLoader className='mt-4' width={"100%"} color='#36d7b7' />
            )}

            {jobs?.length === 0 ? (
                <p>No jobs found.</p>
            ) : (
                <div className="space-y-3">
                    {jobs?.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobListing;
