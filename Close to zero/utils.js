/**
 * Check wether or not a list object is empty
 * @param list
 * @returns {boolean}
 */
export const isEmptyArray = list => {
    return !list || !Array.isArray(list) || list.length === 0;
};

/**
 * Check if all list values are of the same type
 * @param list
 * @param type
 * @returns {function(*): (*|boolean)}
 */
export const isSameTypeOfValuesInArray = (list, type) => {
    return list.every( v => typeof v === type )
}