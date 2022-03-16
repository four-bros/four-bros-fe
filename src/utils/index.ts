const getFields = (obj: any, fields: Set<string>): Set<string> => {
    let valuesSet: Set<string> = new Set();
    // for (const [key, value] of Object.entries(obj)) {
    //     if (fields.has(key)) {
    //         valuesSet.add(`${key}-${value}`);
    //     }
    // }
    fields.forEach((element: any) => {
        valuesSet.add(`${element} -- ${obj[element]}`);
    });

    return valuesSet;
};

export { getFields };
