import { closeToZero } from "./algo";

test("[CloseToZero] : Returns the closest value to 0 in the list", () => {
    expect(closeToZero([ 10, 7, -3, 4.5, -1.3, 579 ])).toBe(-1.3);
});

test("[CloseToZero] : Return 0 if list is empty", () => {
    expect(closeToZero([])).toBe(0);
});

test("[CloseToZero] : Return 0 if list is null", () => {
    expect(closeToZero(null)).toBe(0);
});

test("[CloseToZero] : Return 0 if list is not an array", () => {
    expect(closeToZero("Hello world")).toBe(0);
});

test("[CloseToZero] : Throw TypeError if the list values are not all of the number type", () => {
    expect(() => { closeToZero([1, -1.5, "pomme", {}]) }).toThrow(TypeError);
});