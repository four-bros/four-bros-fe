import { RosterPlayer } from 'interfaces/Teams';
import { PlayerDetails } from '../interfaces/Player';


const getFieldValues = (obj: any, fields: Set<string>): Set<number> => {
    let valuesSet: Set<number> = new Set();
    let incrementor = 0.1;

    fields.forEach((element: string) => {
        const elementNumber = parseInt(obj[element]);
        if (valuesSet.has(elementNumber)) {
            valuesSet.add(elementNumber + incrementor);
            incrementor += 0.1;
        } else {
            valuesSet.add(elementNumber);
        }
    });
    return valuesSet;
};

const getTableHeader = (header: string): string => {

    const words: string[] = header.split('_');
    let capitalizedWords: string[] = [];

    words.forEach( word => {
        const upperLetter = word.charAt(0).toUpperCase();
        const lowerLetters = word.slice(1);
        capitalizedWords.push(upperLetter + lowerLetters)
    })

    return (capitalizedWords.join(' '))

}

const getPlayerYearAndRedshirt = (playerDetails: PlayerDetails | RosterPlayer): string => {
    if (playerDetails.redshirt) {
        return `${playerDetails.player_year}. (Rs.)`;
    } else {
        return `${playerDetails.player_year}.`;
    }
}

const convertTeamNameToSnakeCase = (teamName: string): string => {
    const teamNameSnakeCase: string = teamName.toLowerCase().replace(' ', '_');
    return teamNameSnakeCase;
}

const roundValue = (value: number): string => {
    const roundedValue = (Math.round(value * 100) / 100).toFixed(2);
    return parseFloat(roundedValue) % 1 === 0 ? value.toLocaleString() : roundedValue;
}

export { getFieldValues, getTableHeader, getPlayerYearAndRedshirt, convertTeamNameToSnakeCase, roundValue };
