import { baseGet } from '../baseApi';


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


export const getRecruits = async (): Promise<CommitInfo | void> => {
    try {
        const response = await baseGet('/commits/');
        return response.data;
    } catch (err) {
        console.log(err)
    }
}
