const getFields = (obj: any, fields: Set<string>): Set<string> => {
    let valuesSet: Set<string> = new Set();

    fields.forEach((element: any) => {
        valuesSet.add(obj[element]);
    });

    return valuesSet;
};

export { getFields };
