/* tslint:disable */
/* eslint-disable */
/**
 * FeatureServiceApi
 * This describes the API clients use for accessing features
 *
 * The version of the OpenAPI document: 1.1.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface FeatureStateUpdate
 */
export interface FeatureStateUpdate {
    /**
     * the new value
     * @type {any}
     * @memberof FeatureStateUpdate
     */
    value?: any | null;
    /**
     * indicates whether you are trying to update the value, as value can be null
     * @type {boolean}
     * @memberof FeatureStateUpdate
     */
    updateValue?: boolean | null;
    /**
     * set only if you wish to lock or unlock, otherwise null
     * @type {boolean}
     * @memberof FeatureStateUpdate
     */
    lock?: boolean | null;
}


