import SchemaType from './schematype';
import * as Types from './types/index';
import Promise from 'bluebird';
import SchemaTypeVirtual from './types/virtual';
import type { AddSchemaTypeOptions, PopulateResult } from './types';
/**
 * @callback queryFilterCallback
 * @param {*} data
 * @return {boolean}
 */
type queryFilterCallback = (data: unknown) => boolean;
/**
 * @callback queryCallback
 * @param {*} data
 * @return {void}
 */
type queryCallback = (data: unknown) => void;
/**
 * @callback queryParseCallback
 * @param {*} a
 * @param {*} b
 * @returns {*}
 */
type queryParseCallback = (a: unknown, b: unknown) => number;
declare class Schema {
    paths: Record<string, SchemaType<any>>;
    statics: Record<string, (...args: any[]) => any>;
    methods: Record<string, (...args: any[]) => any>;
    hooks: {
        pre: {
            save: ((...args: any[]) => Promise<any>)[];
            remove: ((...args: any[]) => Promise<any>)[];
        };
        post: {
            save: ((...args: any[]) => Promise<any>)[];
            remove: ((...args: any[]) => Promise<any>)[];
        };
    };
    stacks: {
        getter: ((data: object) => void)[];
        setter: ((data: object) => void)[];
        import: ((data: object) => void)[];
        export: ((data: object) => void)[];
    };
    /**
     * Schema constructor.
     *
     * @param {Object} [schema]
     */
    constructor(schema?: Record<string, AddSchemaTypeOptions>);
    /**
     * Adds paths.
     *
     * @param {Object} schema
     * @param {String} prefix
     */
    add(schema: Record<string, AddSchemaTypeOptions>, prefix?: string): void;
    /**
     * Gets/Sets a path.
     *
     * @param {String} name
     * @param {*} obj
     * @return {SchemaType | undefined}
     */
    path(name: string): SchemaType<any>;
    path(name: string, obj: AddSchemaTypeOptions): void;
    /**
     * Updates cache stacks.
     *
     * @param {String} name
     * @param {SchemaType} type
     * @private
     */
    _updateStack(name: string, type: SchemaType<unknown>): void;
    /**
     * Adds a virtual path.
     *
     * @param {String} name
     * @param {Function} [getter]
     * @return {SchemaType.Virtual}
     */
    virtual(name: string, getter?: () => any): SchemaTypeVirtual;
    /**
     * Adds a pre-hook.
     *
     * @param {String} type Hook type. One of `save` or `remove`.
     * @param {Function} fn
     */
    pre(type: 'save' | 'remove', fn: (...args: any[]) => void): void;
    /**
     * Adds a post-hook.
     *
     * @param {String} type Hook type. One of `save` or `remove`.
     * @param {Function} fn
     */
    post(type: 'save' | 'remove', fn: (...args: any[]) => void): void;
    /**
     * Adds a instance method.
     *
     * @param {String} name
     * @param {Function} fn
     */
    method(name: string, fn: (...args: any[]) => any): void;
    /**
     * Adds a static method.
     *
     * @param {String} name
     * @param {Function} fn
     */
    static(name: string, fn: (...args: any[]) => any): void;
    /**
     * Apply getters.
     *
     * @param {Object} data
     * @return {void}
     * @private
     */
    _applyGetters(data: object): void;
    /**
     * Apply setters.
     *
     * @param {Object} data
     * @return {void}
     * @private
     */
    _applySetters(data: object): void;
    /**
     * Parses database.
     *
     * @param {Object} data
     * @return {Object}
     * @private
     */
    _parseDatabase(data: object): object;
    /**
     * Exports database.
     *
     * @param {Object} data
     * @return {Object}
     * @private
     */
    _exportDatabase(data: object): object;
    /**
     * Parses updating expressions and returns a stack.
     *
     * @param {Object} updates
     * @return {queryCallback[]}
     * @private
     */
    _parseUpdate(updates: object): queryCallback[];
    /**
     * Returns a function for querying.
     *
     * @param {Object} query
     * @return {queryFilterCallback}
     * @private
     */
    _execQuery(query: object): queryFilterCallback;
    /**
     * Parses sorting expressions and returns a stack.
     *
     * @param {Object} sorts
     * @param {string} [prefix]
     * @param {queryParseCallback[]} [stack]
     * @return {queryParseCallback[]}
     * @private
     */
    _parseSort(sorts: object, prefix?: string, stack?: queryParseCallback[]): queryParseCallback[];
    /**
     * Returns a function for sorting.
     *
     * @param {Object} sorts
     * @return {queryParseCallback}
     * @private
     */
    _execSort(sorts: object): queryParseCallback;
    /**
     * Parses population expression and returns a stack.
     *
     * @param {String|Object} expr
     * @return {PopulateResult[]}
     * @private
     */
    _parsePopulate(expr: string | any[] | {
        path?: string;
        model?: any;
        [key: PropertyKey]: any;
    }): PopulateResult[];
    Types: typeof Types;
    static Types: typeof Types;
}
export default Schema;
