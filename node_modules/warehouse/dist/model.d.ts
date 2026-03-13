/// <reference types="node" />
import { EventEmitter } from 'events';
import Promise from 'bluebird';
import Document from './document';
import Query from './query';
import Schema from './schema';
import Mutex from './mutex';
import type Database from './database';
import type { AddSchemaTypeOptions, NodeJSLikeCallback, Options, PopulateResult } from './types';
declare class Model<T> extends EventEmitter {
    name: string;
    _mutex: Mutex;
    data: Record<PropertyKey, T>;
    schema: Schema;
    length: number;
    Document: any;
    Query: any;
    _database: Database;
    /**
     * Model constructor.
     *
     * @param {string} name Model name
     * @param {Schema|object} [schema_] Schema
     */
    constructor(name: string, schema_: Schema | Record<string, AddSchemaTypeOptions>);
    /**
     * Creates a new document.
     *
     * @param {object} data
     * @return {Document}
     */
    new(data?: T): Document<T>;
    /**
     * Finds a document by its identifier.
     *
     * @param {*} id
     * @param {object} options
     *   @param {boolean} [options.lean=false] Returns a plain JavaScript object
     * @return {Document|object}
     */
    findById(id: PropertyKey, options_?: Options): Document<T> | T;
    /**
     * Checks if the model contains a document with the specified id.
     *
     * @param {*} id
     * @return {boolean}
     */
    has(id: PropertyKey): boolean;
    /**
     * Acquires write lock.
     *
     * @return {Promise}
     * @private
     */
    _acquireWriteLock(): Promise.Disposer<void>;
    /**
     * Inserts a document.
     *
     * @param {Document|object} data
     * @return {Promise}
     * @private
     */
    _insertOne(data_: Document<T> | T): Promise<any>;
    /**
     * Inserts a document.
     *
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    insertOne(data: Document<T> | T, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Inserts documents.
     *
     * @param {object|array} data
     * @param {function} [callback]
     * @return {Promise}
     */
    insert(data: Document<T> | T | Document<T>[] | T[], callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Inserts the document if it does not exist; otherwise updates it.
     *
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    save(data: Document<T> | T, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Updates a document with a compiled stack.
     *
     * @param {*} id
     * @param {array} stack
     * @return {Promise}
     * @private
     */
    _updateWithStack(id: string | number, stack: ((data: any) => void)[]): Promise<any>;
    /**
     * Finds a document by its identifier and update it.
     *
     * @param {*} id
     * @param {object} update
     * @param {function} [callback]
     * @return {Promise}
     */
    updateById(id: string | number, update: object, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Updates matching documents.
     *
     * @param {object} query
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    update(query: object, data: object, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Finds a document by its identifier and replace it.
     *
     * @param {*} id
     * @param  {object} data
     * @return {Promise}
     * @private
     */
    _replaceById(id: string | number, data_: Document<T> | T): Promise<any>;
    /**
     * Finds a document by its identifier and replace it.
     *
     * @param {*} id
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    replaceById(id: string | number, data: Document<T> | T, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Replaces matching documents.
     *
     * @param {object} query
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    replace(query: object, data: any, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Finds a document by its identifier and remove it.
     *
     * @param {*} id
     * @return {Promise}
     * @private
     */
    _removeById(id: string | number): Promise<any>;
    /**
     * Finds a document by its identifier and remove it.
     *
     * @param {*} id
     * @param {function} [callback]
     * @return {Promise}
     */
    removeById(id: string | number, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Removes matching documents.
     *
     * @param {object} query
     * @param {function} [callback]
     * @return {Promise}
     */
    remove(query: object, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Deletes a model.
     */
    destroy(): void;
    /**
     * Returns the number of elements.
     *
     * @return {number}
     */
    count(): number;
    /**
     * Iterates over all documents.
     *
     * @param {function} iterator
     * @param {object} [options] See {@link Model#findById}.
     */
    forEach(iterator: (value: any, index: number) => void, options?: Options): void;
    /**
     * Returns an array containing all documents.
     *
     * @param {Object} [options] See {@link Model#findById}.
     * @return {Array}
     */
    toArray(options?: Options): any[];
    /**
     * Finds matching documents.
     *
     * @param {Object} query
     * @param {Object} [options]
     *   @param {Number} [options.limit=0] Limits the number of documents returned.
     *   @param {Number} [options.skip=0] Skips the first elements.
     *   @param {Boolean} [options.lean=false] Returns a plain JavaScript object.
     * @return {Query|Array}
     */
    find(query: object): Query<T>;
    find(query: object, options: Options): Query<T> | T[];
    /**
     * Finds the first matching documents.
     *
     * @param {Object} query
     * @param {Object} [options]
     *   @param {Number} [options.skip=0] Skips the first elements.
     *   @param {Boolean} [options.lean=false] Returns a plain JavaScript object.
     * @return {Document|Object}
     */
    findOne(query: object): Document<T>;
    findOne(query: object, options_: Options): Document<T> | T;
    /**
     * Sorts documents. See {@link Query#sort}.
     *
     * @param {String|Object} orderby
     * @param {String|Number} [order]
     * @return {Query}
     */
    sort(orderby: string | object, order?: string | number): Query<T>;
    /**
     * Returns the document at the specified index. `num` can be a positive or
     * negative number.
     *
     * @param {Number} i
     * @param {Object} [options] See {@link Model#findById}.
     * @return {Document|Object}
     */
    eq(i_: number, options?: Options): Document<T> | Record<PropertyKey, any>;
    /**
     * Returns the first document.
     *
     * @param {Object} [options] See {@link Model#findById}.
     * @return {Document|Object}
     */
    first(options?: Options): Document<T> | Record<PropertyKey, any>;
    /**
     * Returns the last document.
     *
     * @param {Object} [options] See {@link Model#findById}.
     * @return {Document|Object}
     */
    last(options?: Options): Document<T> | Record<PropertyKey, any>;
    /**
     * Returns the specified range of documents.
     *
     * @param {Number} start
     * @param {Number} [end]
     * @return {Query}
     */
    slice(start_?: number, end_?: number): Query<T>;
    /**
     * Limits the number of documents returned.
     *
     * @param {Number} i
     * @return {Query}
     */
    limit(i: number): Query<T>;
    /**
     * Specifies the number of items to skip.
     *
     * @param {Number} i
     * @return {Query}
     */
    skip(i: number): Query<T>;
    /**
     * Returns documents in a reversed order.
     *
     * @return {Query}
     */
    reverse(): Query<T>;
    /**
     * Returns documents in random order.
     *
     * @return {Query}
     */
    shuffle(): Query<T>;
    /**
     * Creates an array of values by iterating each element in the collection.
     *
     * @param {Function} iterator
     * @param {Object} [options]
     * @return {Array}
     */
    map<T>(iterator: (value: any, index: number) => T, options?: Options): T[];
    /**
     * Reduces a collection to a value which is the accumulated result of iterating
     * each element in the collection.
     *
     * @param {Function} iterator
     * @param {*} [initial] By default, the initial value is the first document.
     * @return {*}
     */
    reduce<T>(iterator: (pre: any, cur: any, index: number) => T, initial?: T): T;
    /**
     * Reduces a collection to a value which is the accumulated result of iterating
     * each element in the collection from right to left.
     *
     * @param {Function} iterator
     * @param {*} [initial] By default, the initial value is the last document.
     * @return {*}
     */
    reduceRight<T>(iterator: (pre: any, cur: any, index: number) => T, initial?: T): T;
    /**
     * Creates a new array with all documents that pass the test implemented by the
     * provided function.
     *
     * @param {Function} iterator
     * @param {Object} [options]
     * @return {Query}
     */
    filter(iterator: (value: any, index: number) => any, options?: Options): Query<T>;
    /**
     * Tests whether all documents pass the test implemented by the provided
     * function.
     *
     * @param {Function} iterator
     * @return {Boolean}
     */
    every(iterator: (value: any, index: number) => any): boolean;
    /**
     * Tests whether some documents pass the test implemented by the provided
     * function.
     *
     * @param {Function} iterator
     * @return {Boolean}
     */
    some(iterator: (value: any, index: number) => any): boolean;
    /**
     * Returns a getter function for normal population.
     *
     * @param {Object} data
     * @param {Model} model
     * @param {Object} options
     * @return {Function}
     * @private
     */
    _populateGetter(data: string | number, model: Model<T>, options: unknown): () => Document<T> | Record<PropertyKey, any>;
    /**
     * Returns a getter function for array population.
     *
     * @param {Object} data
     * @param {Model} model
     * @param {Object} options
     * @return {Function}
     * @private
     */
    _populateGetterArray(data: any[], model: Model<T>, options: Options): () => any[] | Query<T>;
    /**
     * Populates document references with a compiled stack.
     *
     * @param {Object} data
     * @param {Array} stack
     * @return {Object}
     * @private
     */
    _populate(data: Document<T>, stack: PopulateResult[]): Document<T>;
    /**
     * Populates document references.
     *
     * @param {String|Object} path
     * @return {Query}
     */
    populate(path: string | any[] | {
        path?: string;
        model?: any;
        [key: PropertyKey]: any;
    }): Query<T>;
    /**
     * Imports data.
     *
     * @param {Array} arr
     * @private
     */
    _import(arr: any[]): void;
    /**
     * Exports data.
     *
     * @return {String}
     * @private
     */
    _export(): string;
    toJSON(): any[];
    get: Model<T>['findById'];
    size: Model<T>['count'];
    each: Model<T>['forEach'];
    random: Model<T>['shuffle'];
}
export default Model;
