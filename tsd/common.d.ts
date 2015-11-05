
/**
 * Declare some simple aliases for semantic purposes
 */

declare type guid = string;
declare type url = string;

/**
 * API Calls
 */

declare type Callback<T> = (success?: T, error?: string) => void;