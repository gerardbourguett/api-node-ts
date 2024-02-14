"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dbconfig_1 = __importDefault(require("./dbconfig"));
const pool = new pg_1.Pool(dbconfig_1.default);
exports.default = pool;
