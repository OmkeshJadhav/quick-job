import React, { useEffect, useState } from "react";
import { useSession } from "@clerk/clerk-react";
import { getJobs } from "@/api/apijobs";
import useFetch from "@/hooks/useFetch";

const JobListing = () => {
    const { isLoaded, isSignedIn, session } = useSession();

    const [location, setLocation] = useState("");
    const [company_id, setCompany_id] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const { fn: fnJobs, data: dataJobs, loading: loadingJobs } = useFetch(getJobs, {
        location,
        company_id,
        searchQuery,
    });

    useEffect(() => {
        if (isLoaded) fnJobs();
    }, [isLoaded, location, company_id, searchQuery]);

    if (!isLoaded || loadingJobs) {
        return <div className="p-4">Loading jobs...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Available Jobs</h1>

            {dataJobs?.length === 0 ? (
                <p>No jobs found.</p>
            ) : (
                <div className="space-y-3">
                    {dataJobs?.map((job) => (
                        <div
                            key={job.id}
                            className="p-3 border rounded-md shadow-sm bg-white"
                        >
                            <h2 className="font-semibold">{job.title}</h2>
                            <p className="text-gray-600">{job.company}</p>
                            <p className="text-sm text-gray-500">
                                {job.location}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobListing;
