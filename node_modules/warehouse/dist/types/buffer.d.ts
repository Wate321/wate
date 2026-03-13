/// <reference types="node" />
import SchemaType from '../schematype';
/**
 * Boolean schema type.
 */
declare class SchemaTypeBuffer extends SchemaType<Buffer> {
    options: SchemaType<Buffer>['options'] & {
        encoding: BufferEncoding;
    };
    /**
     * @param {string} name
     * @param {object} [options]
     *   @param {boolean} [options.required=false]
     *   @param {boolean|Function} [options.default]
     *   @param {string} [options.encoding=hex]
     */
    constructor(name: string, options?: Partial<SchemaType<Buffer>['options']> & {
        encoding?: BufferEncoding;
    });
    /**
     * Casts data.
     *
     * @param {*} value_
     * @param {Object} data
     * @return {Buffer}
     */
    cast(value_: WithImplicitCoercion<Uint8Array | ReadonlyArray<number> | string>, data?: unknown): Buffer;
    cast(value_?: unknown, data?: unknown): Buffer | undefined;
    /**
     * Validates data.
     *
     * @param {*} value_
     * @param {Object} data
     * @return {Buffer}
     */
    validate(value_: unknown, data?: unknown): Buffer;
    /**
     * Compares between two buffers.
     *
     * @param {Buffer} a
     * @param {Buffer} b
     * @return {Number}
     */
    compare(a?: Buffer, b?: Buffer): number;
    /**
     * Parses data and transform them into buffer values.
     *
     * @param {*} value
     * @return {Boolean}
     */
    parse(value: WithImplicitCoercion<Uint8Array | ReadonlyArray<number> | string>): Buffer;
    parse(value?: unknown): Buffer | null | undefined;
    /**
     * Transforms data into number to compress the size of database files.
     *
     * @param {Buffer} value
     * @return {String}
     */
    value(value?: Buffer): string;
    /**
     * Checks the equality of data.
     *
     * @param {Buffer} value
     * @param {Buffer} query
     * @return {Boolean}
     */
    match(value: Buffer, query: Buffer): boolean;
}
export default SchemaTypeBuffer;
