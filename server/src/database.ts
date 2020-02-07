  
import { createPool, Pool } from 'mysql2/promise'
import keys from './keys';

export async function connect(): Promise<Pool>{
    const connection =await createPool(keys.database);
    return connection; 
}