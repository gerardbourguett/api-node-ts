"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agency_1 = __importDefault(require("./routes/agency"));
const app = (0, express_1.default)();
const PORT = 3000;
//Middlewares
app.use(express_1.default.json());
//Routes
app.use("/agencias", agency_1.default);
// Error handling middleware
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
