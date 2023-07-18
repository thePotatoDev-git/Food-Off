import { apiSlice } from './apiSlice';
const EATERIES_URL = '/api/eateries';

export const eateriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEateryLists: builder.query({
            query: () => ({
                url: `${EATERIES_URL}/lists`,
            }),
            keepUnusedDataFor: 5,
        }),
        addEatery: builder.mutation({
            query: (data) => ({
                url: `${EATERIES_URL}`, // URLs used in routes
                method: 'POST',
                body: data,
            }),
        }),
    })
});

export const { 
    useGetEateryListsQuery, 
    useAddEateryMutation,
} = eateriesApiSlice;