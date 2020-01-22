import UsersService from '#root/adapters/UsersService';

const userSessionResolver = async (obj, args, context) => {
    if (args.me !== true)
        throw new Error("Unsupported argument value");
    console.log('USER SESSION IN RESOLVER:', context.res.locals.session);
    return context.res.locals.session;
}

export default userSessionResolver;
