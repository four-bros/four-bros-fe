const getFields = (obj: any, fields: Set<string>): Set<number> => {
    let valuesSet: Set<number> = new Set();
    let incrementor = 0.1;

    fields.forEach((element: any) => {
        const elementNumber = parseInt(obj[element]);
        if (valuesSet.has(elementNumber)) {
            valuesSet.add(elementNumber + incrementor);
        } else {
            valuesSet.add(elementNumber);
        }
        incrementor += 0.1;
    });
    return valuesSet;
};

export { getFields };
