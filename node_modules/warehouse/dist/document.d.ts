import type Model from './model';
import type Schema from './schema';
import type { NodeJSLikeCallback } from './types';
declare abstract class Document<T> {
    abstract _model: Model<T>;
    _id: string | number | undefined;
    abstract _schema: Schema;
    [key: string]: any;
    /**
     * Document constructor.
     *
     * @param {object} data
     */
    constructor(data?: T);
    /**
     * Saves the document.
     *
     * @param {function} [callback]
     * @return {Promise}
     */
    save(callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Updates the document.
     *
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    update(data: object, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Replaces the document.
     *
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    replace(data: T | Document<T>, callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Removes the document.
     *
     * @param {function} [callback]
     * @return {Promise}
     */
    remove(callback?: NodeJSLikeCallback<any>): Promise<any>;
    /**
     * Returns a plain JavaScript object.
     *
     * @return {object}
     */
    toObject(): T;
    /**
     * Returns a string representing the document.
     *
     * @return {String}
     */
    toString(): string;
    /**
     * Populates document references.
     *
     * @param {String|Object} expr
     * @return {Document}
     */
    populate(expr: string | any[] | {
        path?: string;
        model?: any;
        [key: PropertyKey]: any;
    }): Document<T>;
}
export default Document;
