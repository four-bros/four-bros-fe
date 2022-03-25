const getFields = (obj: any, fields: Set<string>): Set<number> => {
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

export { getFields };
