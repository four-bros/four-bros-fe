
export interface Commit {
    name: string,
    position: string,
    rank: number,
    school: string,
    stars: number,
    week: number,
    year: number
}

export interface CommitInfo {
    [key: string]: {
        avg_star: number,
        commits: Commit[],
        stars: {
            1: number,
            2: number,
            3: number,
            4: number,
            5: number,
        },
        top_100: number
    }
}
