import SchemaType from '../schematype';
/**
 * Number schema type.
 */
declare class SchemaTypeNumber extends SchemaType<number> {
    /**
     * Casts a number.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Number}
     */
    cast(value_: Exclude<unknown, undefined | null>, data?: unknown): number;
    cast(value_?: unknown, data?: unknown): number | undefined;
    /**
     * Validates a number.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Number|Error}
     */
    validate(value_?: unknown, data?: unknown): number;
    /**
     * Adds value to a number.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$inc(value: number | undefined, update: number): number;
    /**
     * Subtracts value from a number.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$dec(value: number | undefined, update: number): number;
    /**
     * Multiplies value to a number.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$mul(value: number | undefined, update: number): number;
    /**
     * Divides a number by a value.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$div(value: number | undefined, update: number): number;
    /**
     * Divides a number by a value and returns the remainder.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$mod(value: number | undefined, update: number): number;
    /**
     * Updates a number if the value is greater than the current value.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$max(value: number | undefined, update: number): number;
    /**
     * Updates a number if the value is less than the current value.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$min(value: number | undefined, update: number): number;
}
export default SchemaTypeNumber;
