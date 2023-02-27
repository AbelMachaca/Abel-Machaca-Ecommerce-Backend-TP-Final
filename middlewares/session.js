import session from "express-session";

export const sessionHandler = session({
    secret: 'coderhouse',
    rolling: true,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
})