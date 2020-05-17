import {isEmptyArray, isSameTypeOfValuesInArray } from "./utils";

/**
 * Method who will search in a list the closest value to the given value.
 * @param list
 * @param givenValue
 * @returns {number|*}
 */
const closeToGivenValue = (list, givenValue) => {
    if(isEmptyArray(list)) { return 0; }
    if(!isSameTypeOfValuesInArray(list, "number")) { throw new TypeError("Values are not all of type number")}

    const closestReducer = value => (a, b) => {
        return Math.abs(value - a) < Math.abs(value - b) ? a : b;
    }

    return list.reduce(closestReducer(givenValue));
};

/**
 * Method who will search in a list the closest value to zero.
 * @param list
 * @returns {number|*}
 */
export const closeToZero = (list) => {
    return closeToGivenValue(list, 0);
};