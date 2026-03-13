import Bluebird from 'bluebird';
import Model from './model';
import Schema from './schema';
import SchemaType from './schematype';
import type { AddSchemaTypeOptions, NodeJSLikeCallback } from './types';
interface DatabaseOptions {
    version: number;
    path: string;
    onUpgrade: (...args: any[]) => any;
    onDowngrade: (...args: any[]) => any;
}
declare class Database {
    options: DatabaseOptions;
    _models: Record<string, Model<any>>;
    Model: typeof Model;
    /**
     * Database constructor.
     *
     * @param {object} [options]
     *   @param {number} [options.version=0] Database version
     *   @param {string} [options.path] Database path
     *   @param {function} [options.onUpgrade] Triggered when the database is upgraded
     *   @param {function} [options.onDowngrade] Triggered when the database is downgraded
     */
    constructor(options?: {
        path: string;
    } & Partial<DatabaseOptions>);
    /**
     * Creates a new model.
     *
     * @param {string} name
     * @param {Schema|object} [schema]
     * @return {Model}
     */
    model(name: string, schema?: Schema | Record<string, AddSchemaTypeOptions>): Model<any>;
    /**
     * Loads database.
     *
     * @param {function} [callback]
     * @return {Promise}
     */
    load(callback?: NodeJSLikeCallback<any>): Bluebird<any>;
    /**
     * Saves database.
     *
     * @param {function} [callback]
     * @return {Promise}
     */
    save(callback?: NodeJSLikeCallback<any>): Bluebird<void>;
    toJSON(): {
        meta: {
            version: number;
            warehouse: string;
        };
        models: Record<string, Model<any>>;
    };
    static Schema: typeof Schema;
    Schema: typeof Schema;
    static SchemaType: typeof SchemaType;
    SchemaType: typeof SchemaType;
    static version: number;
}
export default Database;
