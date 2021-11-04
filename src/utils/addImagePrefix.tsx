export const addImagePrefix = (url: string) => {
    return process.env.NODE_ENV === 'production' ? '/Portfolio-Website' + url : url;
};
