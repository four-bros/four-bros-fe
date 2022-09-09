import { Table } from 'semantic-ui-react';

import { TableContainer, LargeTable } from 'components/common';
import {
    desktopAthleticAbilitiesHeaders,
    desktopAthleticAbilityFields,
    desktopOffenseAbilitiesHeaders,
    desktopOffenseAbilitiesFields,
    desktopDefenseAbilitiesHeaders,
    desktopDefenseAbilitiesFields,
} from '../desktopTableTransform';
import {
    mobileAthleticAbilitiesHeaders,
    mobilePassingAbilityHeaders,
    mobileRushingAbilitiesHeaders,
    mobileRecAbilitiesHeaders,
    mobileTackleAbilitiesHeaders,
    mobileCoverageAbilitiesHeaders,
    mobileAthleticAbilityFields,
    mobilePassingAbilityFields,
    mobileRushingAbilityFields,
    mobileRecAbilityFields,
    mobileTackleAbilityFields,
    mobileCoverageAbilityFields,
} from '../mobileTableTransform';
import { PlayerStatsStructure } from 'api/players';
import { getFields, getTableHeader } from 'utils';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import style from './playerAbilities.module.scss';


type Props = {
    player: PlayerStatsStructure;
    abilityType: string;
};

const PlayerAbilities = ({ player, abilityType }: Props) => {
    const mobile = useMediaQuery('(max-width: 767px)');
    const abilitiesHeader: string = `${getTableHeader(abilityType)} Abilities`;

    const fieldRows = (fields: Set<string>) => {
        const values = Array.from(getFields(player.abilities, fields));

        return (
            <>
                <Table.Row>
                    {values.map((value, idx) => (
                        <Table.Cell key={`${value}-${idx}`}>
                            {Math.floor(value)}
                        </Table.Cell>
                    ))}
                </Table.Row>
            </>
        );
    };

    return (
        <>
            
            {mobile && (
                <h1 className={style.header}>{abilitiesHeader}</h1>
            )}

            {abilityType === 'athletic' && (
                <>
                    {mobile && (
                        <TableContainer title='Athletic Abilities'>
                            <LargeTable
                                header={mobileAthleticAbilitiesHeaders}
                                contents={fieldRows(mobileAthleticAbilityFields)}
                            />
                        </TableContainer>
                    )}
                    {!mobile && (
                        <TableContainer title='Athletic Abilities'>
                            <LargeTable
                                header={desktopAthleticAbilitiesHeaders}
                                contents={fieldRows(desktopAthleticAbilityFields)}
                            />
                        </TableContainer>
                    )}
                </>
            )}

            {abilityType === 'offensive' && (
                <>
                {mobile && (
                    <>
                        <TableContainer title='Passing'>
                            <LargeTable
                                header={mobilePassingAbilityHeaders}
                                contents={fieldRows(mobilePassingAbilityFields)}
                            />
                        </TableContainer>

                        <TableContainer title='Rushing'>
                            <LargeTable
                                header={mobileRushingAbilitiesHeaders}
                                contents={fieldRows(mobileRushingAbilityFields)}
                            />
                        </TableContainer>

                        <TableContainer title='Receiving'>
                            <LargeTable
                                header={mobileRecAbilitiesHeaders}
                                contents={fieldRows(mobileRecAbilityFields)}
                            />
                        </TableContainer>
                    </>
                )}
                {!mobile && (
                    <>
                        <TableContainer title='Offensive Abilities'>
                            <LargeTable
                                header={desktopOffenseAbilitiesHeaders}
                                contents={fieldRows(desktopOffenseAbilitiesFields)}
                            />
                        </TableContainer>
                    </>
                )}
                </>
            )}

            {abilityType === 'defensive' && (
                <>
                {mobile && (
                    <>
                        <TableContainer title='Tackling'>
                            <LargeTable
                                header={mobileTackleAbilitiesHeaders}
                                contents={fieldRows(mobileTackleAbilityFields)}
                            />
                        </TableContainer>

                        <TableContainer title='Coverage'>
                            <LargeTable
                                header={mobileCoverageAbilitiesHeaders}
                                contents={fieldRows(mobileCoverageAbilityFields)}
                            />
                        </TableContainer>
                    </>
                )}
                {!mobile && (
                    <>
                        <TableContainer title='Defensive Abilities'>
                            <LargeTable
                                header={desktopDefenseAbilitiesHeaders}
                                contents={fieldRows(desktopDefenseAbilitiesFields)}
                            />
                        </TableContainer>
                    </>
                )}
                </>
            )}
        </>
    );
};

export default PlayerAbilities;
