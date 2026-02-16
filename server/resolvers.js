import { getJobs } from "./db/jobs.js";
export const resolvers = {
    Query: {
        jobs: async () => getJobs()

    },

    Job: {
        date: (job) => toIsoDate(job.createdAt)
    }
}

function toIsoDate(value) {
    return value.slice(0, 'yyy-mm-dd'.length)
}