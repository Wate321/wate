import SchemaType from '../schematype';
/**
 * Object schema type.
 */
declare class SchemaTypeObject extends SchemaType<Record<string, any>> {
    /**
     *
     * @param {String} [name]
     * @param {Object} [options]
     *   @param {Boolean} [options.required=false]
     *   @param {Object|Function} [options.default={}]
     */
    constructor(name?: string, options?: Partial<SchemaType<Record<string, any>>['options']>);
}
export default SchemaTypeObject;
