import SchemaType from '../schematype';
/**
 * Array schema type.
 */
declare class SchemaTypeArray<I, T extends SchemaType<I>> extends SchemaType<I[]> {
    options: SchemaType<I[]>['options'] & {
        child?: T;
    };
    child: T;
    /**
     *
     * @param {String} name
     * @param {Object} [options]
     *   @param {Boolean} [options.required=false]
     *   @param {Array|Function} [options.default=[]]
     *   @param {SchemaType} [options.child]
     */
    constructor(name: string, options?: Partial<SchemaType<I[]>['options']> & {
        child?: T;
    });
    /**
     * Casts an array and its child elements.
     *
     * @param {*} value_
     * @param {Object} data
     * @return {Array}
     */
    cast(value_: Exclude<unknown, null | undefined>, data?: unknown): I[];
    cast(value_?: unknown, data?: unknown): I[] | undefined;
    /**
     * Validates an array and its child elements.
     *
     * @param {*} value_
     * @param {Object} data
     * @return {Array|Error}
     */
    validate(value_?: unknown, data?: unknown): I[];
    /**
     * Compares an array by its child elements and the size of the array.
     *
     * @param {Array} a
     * @param {Array} b
     * @return {Number}
     */
    compare(a?: I[], b?: I[]): number;
    /**
     * Parses data.
     *
     * @param {Array} value
     * @return {Array}
     */
    parse(value: unknown[]): I[];
    parse(): undefined;
    /**
     * Transforms data.
     *
     * @param {Array} value
     * @param {Object} data
     * @return {Array}
     */
    value(value: unknown[], data?: unknown): any[];
    value(): undefined;
    /**
     * Checks the equality of an array.
     *
     * @param {Array} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    match(value?: I[], query?: unknown[], data?: unknown): boolean;
    /**
     * Checks whether the number of elements in an array is equal to `query`.
     *
     * @param {Array} value
     * @param {Number} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$size(value?: unknown[], query?: unknown, data?: unknown): boolean;
    /**
     * Checks whether an array contains one of elements in `query`.
     *
     * @param {Array} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$in(value?: unknown[], query?: unknown[], data?: unknown): boolean;
    /**
     * Checks whether an array does not contain in any elements in `query`.
     *
     * @param {Array} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$nin<T>(value?: T[], query?: T[], data?: unknown): boolean;
    /**
     * Checks whether an array contains all elements in `query`.
     *
     * @param {Array} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$all<T>(value?: T[], query?: T[], data?: unknown): boolean;
    /**
     * Add elements to an array.
     *
     * @param {Array} value
     * @param {*} update
     * @param {Object} data
     * @return {Array}
     */
    u$push<T>(value?: T[], update?: T | T[], data?: unknown): T[];
    /**
     * Add elements in front of an array.
     *
     * @param {Array} value
     * @param {*} update
     * @param {Object} data
     * @return {Array}
     */
    u$unshift<T>(value?: T[], update?: T | T[], data?: unknown): T[];
    /**
     * Removes elements from an array.
     *
     * @param {Array} value
     * @param {*} update
     * @param {Object} data
     * @return {Array}
     */
    u$pull<T>(value?: T[], update?: T | T[], data?: unknown): T[];
    /**
     * Removes the first element from an array.
     *
     * @param {Array} value
     * @param {Number|Boolean} update
     * @param {Object} data
     * @return {Array}
     */
    u$shift<T>(value?: T[], update?: number | boolean, data?: unknown): T[];
    /**
     * Removes the last element from an array.
     *
     * @param {Array} value
     * @param {Number|Boolean} update
     * @param {Object} data
     * @return {Array}
     */
    u$pop<T>(value?: T[], update?: number | boolean, data?: unknown): T[];
    /**
     * Add elements to an array only if the value is not already in the array.
     *
     * @param {Array} value
     * @param {*} update
     * @param {Object} data
     * @return {Array}
     */
    u$addToSet<T>(value?: T[], update?: T | T[], data?: unknown): T[];
    q$length: SchemaTypeArray<I, T>['q$size'];
    u$append: SchemaTypeArray<I, T>['u$push'];
    u$prepend: SchemaTypeArray<I, T>['u$unshift'];
}
export default SchemaTypeArray;
