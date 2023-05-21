
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
    baylor: Commit[],
    ole_miss: Commit[],
    vanderbilt: Commit[],
    wyoming: Commit[]
}
