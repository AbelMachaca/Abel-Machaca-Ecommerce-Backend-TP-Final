import passport from "passport"

export const userAuth = passport.authenticate("register", { failureRedirect: '/api/users/fail' })