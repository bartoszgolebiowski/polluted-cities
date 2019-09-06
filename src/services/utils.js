export const createQueryParams = (params) => {
    return Object.keys(params)
        .map(k => `${k}=${params[k]}`)
        .join('&');
};