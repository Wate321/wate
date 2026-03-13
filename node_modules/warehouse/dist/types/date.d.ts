import SchemaType from '../schematype';
/**
 * Date schema type.
 */
declare class SchemaTypeDate extends SchemaType<Date> {
    /**
     * Casts data.
     *
     * @param {*} value_
     * @return {Date | null | undefined}
     */
    cast(value_: Date | number | string): Date;
    cast(value_?: unknown): Date | undefined;
    /**
     * Validates data.
     *
     * @param {*} value_
     * @param {Object} data
     * @return {Date|Error}
     */
    validate(value_: unknown, data?: unknown): Date;
    /**
     * Checks the equality of data.
     *
     * @param {Date} value
     * @param {Date} query
     * @return {Boolean}
     */
    match(value: Date, query: Date): boolean;
    /**
     * Compares between two dates.
     *
     * @param {Date} a
     * @param {Date} b
     * @return {Number}
     */
    compare(a?: Date, b?: Date): number;
    /**
     * Parses data and transforms it into a date object.
     *
     * @param {*} value
     * @return {Date}
     */
    parse(value: string | number | Date): Date;
    parse(): undefined;
    /**
     * Transforms a date object to a string.
     *
     * @param {Date} value
     * @return {String}
     */
    value(value: Date): string;
    value(): undefined;
    /**
     * Finds data by its date.
     *
     * @param {Date} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$day(value: Date | undefined, query: number): boolean;
    /**
     * Finds data by its month. (Start from 0)
     *
     * @param {Date} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$month(value: Date | undefined, query: number): boolean;
    /**
     * Finds data by its year. (4-digit)
     *
     * @param {Date} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$year(value: Date | undefined, query: number): boolean;
    /**
     * Adds milliseconds to date.
     *
     * @param {Date} value
     * @param {Number} update
     * @return {Date}
     */
    u$inc(value: Date | undefined, update: number): Date;
    /**
     * Subtracts milliseconds from date.
     *
     * @param {Date} value
     * @param {Number} update
     * @return {Date}
     */
    u$dec(value: Date | undefined, update: number): Date;
}
export default SchemaTypeDate;
