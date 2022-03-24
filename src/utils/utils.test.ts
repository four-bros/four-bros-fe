import {getFields} from './index';

describe('utils test suite', () => {
    it("should return correct values when there are no duplicates", () => {
        const fields = new Set([
            'completions',
            'pass_att',
            'pass_yards',
            'pass_yp_game',
            'pass_tds',
            'ints',
        ]);

        const obj = {
            "completions": 17,
            "games_played": 1,
            "ints": 1,
            "longest_pass": 40,
            "pass_att": 23,
            "pass_rating": 234,
            "pass_tds": 4,
            "pass_yards": 306,
            "pass_yp_attempt": 13.3,
            "pass_yp_game": 305,
            "sacked": 2,
            "year": "2033"
        }

        const result = getFields(obj, fields);
        const expectation = new Set([17, 23, 305, 306, 4, 1])
        expect(result).toEqual(expectation);
    })

    it('should return incremented values for duplicate entries', () => {
        const fields = new Set([
            'completions',
            'pass_att',
            'pass_yards',
            'pass_yp_game',
            'pass_tds',
            'ints',
        ]);

        const obj = {
            "completions": 23,
            "games_played": 1,
            "ints": 1,
            "longest_pass": 40,
            "pass_att": 23,
            "pass_rating": 234,
            "pass_tds": 4,
            "pass_yards": 305,
            "pass_yp_attempt": 13.3,
            "pass_yp_game": 305,
            "sacked": 2,
            "year": "2033"
        }

        const result = getFields(obj, fields);
        const expectation = new Set([23, 23.1, 305, 305.2, 4, 1])
        expect(result).toEqual(expectation);
    })
})