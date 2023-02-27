import passport from "passport"

export const loginAuth = passport.authenticate("login", { failureRedirect: '/login/fail' })