import React, { useEffect, useState } from "react";
import { useSession } from "@clerk/clerk-react";
import { getJobs } from "@/api/apijobs";

const JobListing = () => {
    const { isLoaded, isSignedIn, session } = useSession();

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchJobs = async () => {
        try {
            setLoading(true);
            setError("");

            // Safety check
            if (!session) {
                setError("No active session found.");
                setLoading(false);
                return;
            }

            // Get Supabase token from Clerk
            const supabaseAccessToken = await session.getToken({
                template: "supabase",
            });

            if (!supabaseAccessToken) {
                setError("Failed to get Supabase token.");
                setLoading(false);
                return;
            }

            // Fetch jobs (API call)
            const data = await getJobs(supabaseAccessToken);

            setJobs(data || []);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch jobs.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isLoaded && isSignedIn) {
            fetchJobs();
        }
    }, [isLoaded, isSignedIn]);

    // Loading State
    if (!isLoaded || loading) {
        return <div className="p-4">Loading jobs...</div>;
    }

    // If User Not Signed In
    if (!isSignedIn) {
        return <div className="p-4">Please sign in to view jobs.</div>;
    }

    // Error State
    if (error) {
        return <div className="p-4 text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Available Jobs</h1>

            {jobs.length === 0 ? (
                <p>No jobs found.</p>
            ) : (
                <div className="space-y-3">
                    {jobs.map((job) => (
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
