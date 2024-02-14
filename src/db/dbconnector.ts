import { Pool } from "pg";
import dbconfig from "./dbconfig";

const pool = new Pool(dbconfig);

export default pool;