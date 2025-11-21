import React from 'react'

const JobCard = ({ job }) => {
    return (
        <div
            key={job.id}
            className="p-3 border rounded-md shadow-sm space-y-3"
        >
            <h1 className="font-semibold flex justify-between">
                {job.job_title}
                <span className={`text-sm text-white rounded-full px-2 py-1 ${job.isOpen ? "bg-green-800" : "bg-red-500"}`}>
                    {job.isOpen ? "Open" : "Closed"}
                </span>
            </h1>

            <div className="flex justify-between">
                <p className="text-gray-600">{job.job_company}</p>
                <p className="text-sm text-gray-500">
                    {job.location}
                </p>
            </div>
            <p className="text-sm text-gray-500">
                recruiter_id: {job.recruiter_id}
            </p>
            <p className="text-sm text-gray-500">
                Description:
                {job.job_description}
            </p>
            <p className="text-sm text-gray-500">
                Requirements: {job.requirements}
            </p>
        </div>
    )
}

export default JobCard