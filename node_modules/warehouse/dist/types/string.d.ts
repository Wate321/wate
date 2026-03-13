import SchemaType from '../schematype';
/**
 * String schema type.
 */
declare class SchemaTypeString extends SchemaType<string> {
    /**
     * Casts a string.
     *
     * @param {*} value_
     * @param {Object} data
     * @return {String}
     */
    cast(value_: {
        toString(): string;
    }, data?: unknown): string;
    cast(value_?: unknown, data?: unknown): string | undefined;
    /**
     * Validates a string.
     *
     * @param {*} value_
     * @param {Object} data
     * @return {String|Error}
     */
    validate(value_?: unknown, data?: unknown): string;
    /**
     * Checks the equality of data.
     *
     * @param {*} value
     * @param {String|RegExp} query
     * @param {Object} data
     * @return {Boolean}
     */
    match(value: string | undefined, query: string | RegExp | undefined, data?: unknown): boolean;
    /**
     * Checks whether a string is equal to one of elements in `query`.
     *
     * @param {String} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$in(value: string | undefined, query: string[] | RegExp[], data?: unknown): boolean;
    /**
     * Checks whether a string is not equal to any elements in `query`.
     *
     * @param {String} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$nin(value: string | undefined, query: string[] | RegExp[], data?: unknown): boolean;
    /**
     * Checks length of a string.
     *
     * @param {String} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$length(value: string | undefined, query: number): boolean;
}
export default SchemaTypeString;
