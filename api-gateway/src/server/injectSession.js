import UsersService from '#root/adapters/UsersService';

const injectSession = async (req, res, next) => {
    if (req.cookies.userSessionId) {
        const userSession = UsersService.fetchUserSession({
            sessionId: req.cookies.userSessionId
        });
        res.locals.session = userSession;
    }

    return next();
}

export default injectSession;
