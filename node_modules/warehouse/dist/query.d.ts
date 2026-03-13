import Promise from 'bluebird';
import type Model from './model';
import type Schema from './schema';
import type Document from './document';
import type { NodeJSLikeCallback, Options } from './types';
declare abstract class Query<T> {
    data: Document<T>[];
    length: number;
    abstract _model: Model<T>;
    abstract _schema: Schema;
    /**
     * Query constructor.
     *
     * @param {Array} data
     */
    constructor(data: Document<T>[]);
    /**
     * Returns the number of elements.
     *
     * @return Number
     */
    count(): number;
    /**
     * Iterates over all documents.
     *
     * @param {Function} iterator
     */
    forEach(iterator: (item: any, index: number) => void): void;
    /**
     * Returns an array containing all documents.
     *
     * @return {Array}
     */
    toArray(): Document<T>[];
    /**
     * Returns the document at the specified index. `num` can be a positive or
     * negative number.
     *
     * @param {Number} i
     * @return {Document|Object}
     */
    eq(i: number): Document<T>;
    /**
     * Returns the first document.
     *
     * @return {Document|Object}
     */
    first(): Document<T>;
    /**
     * Returns the last document.
     *
     * @return {Document|Object}
     */
    last(): Document<T>;
    /**
     * Returns the specified range of documents.
     *
     * @param {Number} start
     * @param {Number} [end]
     * @return {Query}
     */
    slice(start: number, end?: number): Query<T>;
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
    find(query: object, options: Options): T[] | Query<T>;
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
    findOne(query: object, options: any): Document<T> | T;
    /**
     * Sorts documents.
     *
     * Example:
     *
     * ``` js
     * query.sort('date', -1);
     * query.sort({date: -1, title: 1});
     * query.sort('-date title');
     * ```
     *
     * If the `order` equals to `-1`, `desc` or `descending`, the data will be
     * returned in reversed order.
     *
     * @param {String|Object} orderby
     * @param {String|Number} [order]
     * @return {Query}
     */
    sort(orderby: string | object, order?: string | number | object): Query<T>;
    /**
     * Creates an array of values by iterating each element in the collection.
     *
     * @param {Function} iterator
     * @return {Array}
     */
    map<T>(iterator: (item: any, index: number) => T): T[];
    /**
     * Reduces a collection to a value which is the accumulated result of iterating
     * each element in the collection.
     *
     * @param {Function} iterator
     * @param {*} [initial] By default, the initial value is the first document.
     * @return {*}
     */
    reduce<R>(iterator: (pre: any, cur: any, index: number) => R, initial?: R): R;
    /**
     * Reduces a collection to a value which is the accumulated result of iterating
     * each element in the collection from right to left.
     *
     * @param {Function} iterator
     * @param {*} [initial] By default, the initial value is the last document.
     * @return {*}
     */
    reduceRight<R>(iterator: (pre: any, cur: any, index: number) => R, initial?: R): R;
    /**
     * Creates a new array with all documents that pass the test implemented by the
     * provided function.
     *
     * @param {Function} iterator
     * @return {Query}
     */
    filter(iterator: (item: any, index: number) => boolean): Query<T>;
    /**
     * Tests whether all documents pass the test implemented by the provided
     * function.
     *
     * @param {Function} iterator
     * @return {Boolean}
     */
    every(iterator: (item: any, index: number) => boolean): boolean;
    /**
     * Tests whether some documents pass the test implemented by the provided
     * function.
     *
     * @param {Function} iterator
     * @return {Boolean}
     */
    some(iterator: (item: any, index: number) => boolean): boolean;
    /**
     * Update all documents.
     *
     * @param {Object} data
     * @param {Function} [callback]
     * @return {Promise}
     */
    update(data: any, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Replace all documents.
     *
     * @param {Object} data
     * @param {Function} [callback]
     * @return {Promise}
     */
    replace(data: any, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Remove all documents.
     *
     * @param {Function} [callback]
     * @return {Promise}
     */
    remove(callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Populates document references.
     *
     * @param {String|Object} expr
     * @return {Query}
     */
    populate(expr: string | any[] | {
        path?: string;
        model?: any;
        [key: PropertyKey]: any;
    }): Query<T>;
    size: Query<T>['count'];
    each: Query<T>['forEach'];
    random: Query<T>['shuffle'];
}
export default Query;
