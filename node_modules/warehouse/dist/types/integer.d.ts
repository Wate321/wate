import SchemaTypeNumber from './number';
/**
 * Integer schema type.
 */
declare class SchemaTypeInteger extends SchemaTypeNumber {
    /**
     * Casts a integer.
     *
     * @param {*} value_
     * @param {Object} data
     * @return {Number}
     */
    cast(value_?: unknown, data?: unknown): number;
    /**
     * Validates an integer.
     *
     * @param {*} value_
     * @param {Object} data
     * @return {Number|Error}
     */
    validate(value_?: unknown, data?: unknown): number;
}
export default SchemaTypeInteger;
