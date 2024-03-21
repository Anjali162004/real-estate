import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://dev-cn1j7if0vai05r8j.us.auth0.com/api/v2/",
    issuerBaseURL: "https://dev-cn1j7if0vai05r8j.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck