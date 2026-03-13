import SchemaType from '../schematype';
/**
 * Enum schema type.
 */
declare class SchemaTypeEnum extends SchemaType<any[]> {
    options: SchemaType<any[]>['options'] & {
        elements: any[];
    };
    /**
     *
     * @param {String} name
     * @param {Object} options
     *   @param {Boolean} [options.required=false]
     *   @param {Array} options.elements
     *   @param {*} [options.default]
     */
    constructor(name: string, options?: Partial<SchemaType<any[]>['options']> & {
        elements?: any[];
    });
    /**
     * Validates data. The value must be one of elements set in the options.
     *
     * @param {*} value_
     * @param {Object} data
     * @return {*}
     */
    validate(value_: unknown, data?: unknown): unknown;
}
export default SchemaTypeEnum;
