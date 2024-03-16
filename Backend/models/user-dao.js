import SQL from 'sql-template-strings'
import { getDatabase } from '../Database/database.js';

export const getGuests = async() => {
    const db = await getDatabase();
    const guests = await db.run (SQL`
    SELECT * 
    FROM guests
    `);

    return guests
}
