import ListingsService from '#root/adapters/ListingsService';

const createListingResolver = async (obj, { description, title}, context) => {
    if (!context.res.locals.session)
        throw new Error('Not Logged In!');
    return await ListingsService.createListing({ description, title });
}

export default createListingResolver;