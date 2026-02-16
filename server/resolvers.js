export const resolvers = {
    Query: {
        job: () => {
            return {
                id: "test-Id",
                title: "THe JOB",
                description: "The DESC"
            }
        }
    }
}