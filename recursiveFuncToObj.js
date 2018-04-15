let array1 = [
    [
        ['firstName', 'Joe'],
        ['lastName', 'Blow'],
        ['age', '42'],
        ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'],
        ['lastName', 'Jenkins'],
        ['age', '36'],
        ['role', 'manager']
    ]
];

function transformEmployeeData(array, newArray=[], newObj={}, i=0, j=0) {
    while (i < array.length) {
        while (j < array[i].length) {
            newObj[array[i][j][0]] = array[i][j][1];
            j++;
            return transformEmployeeData(array, newArray, newObj, i, j);
        }
        newArray.push(newObj);
        i++;
        return transformEmployeeData(array, newArray, {}, i);
    }
    return newArray;
