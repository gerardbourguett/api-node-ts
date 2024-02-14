import express, { Request, Response, NextFunction } from "express";

import agenciesRouter from "./routes/agency";
import calendarRouter from "./routes/calendar";
import calendarDatesRouter from "./routes/calendar-dates";
import feedInfoRouter from "./routes/feed-info";
import frequenciesRouter from "./routes/frequencies";
import routesRouter from "./routes/routes";
import stopsRouter from "./routes/stops";
import stopTimesRouter from "./routes/stop-times";
import tripsRouter from "./routes/trips";
import shapesRouter from "./routes/shapes";



const app = express();
const PORT = 3000;

//Middlewares
app.use(express.json());

//Routes
app.use("/api/agency", agenciesRouter);
app.use("/api/calendar", calendarRouter);
app.use("/api/calendar-dates", calendarDatesRouter);
app.use("/api/feed-info", feedInfoRouter);
app.use("/api/frequencies", frequenciesRouter);
app.use("/api/routes", routesRouter);
app.use("/api/stops", stopsRouter);
app.use("/api/stop-times", stopTimesRouter);
app.use("/api/trips", tripsRouter);
app.use("/api/shapes", shapesRouter);

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});