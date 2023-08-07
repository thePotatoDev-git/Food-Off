import { apiSlice } from './apiSlice';
const EATERIES_URL = '/api/eateries';

export const eateriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEateryLists: builder.query({
            query: () => ({
                url: `${EATERIES_URL}/eateries`,
            }),
            keepUnusedDataFor: 5,
        }),
        getEateryById: builder.query({
            query: (eateryId) => ({
                url: `${EATERIES_URL}/eateries/${eateryId}`,
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
        updateEatery: builder.mutation({
            query: (data) => ({
                url: `${EATERIES_URL}/eateries/${data.eateryId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Eateries'],
        }),
    })
});

export const { 
    useGetEateryListsQuery, 
    useGetEateryByIdQuery,
    useAddEateryMutation,
    useUpdateEateryMutation,
} = eateriesApiSlice;