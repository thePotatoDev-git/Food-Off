import { apiSlice } from './apiSlice';
const EATERIES_URL = '/api/eateries';

export const eateriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEateryLists: builder.query({
            query: () => ({
                url: `${EATERIES_URL}/eateries`,
            }),
            keepUnusedDataFor: 1,
        }),
        getEateryById: builder.query({
            query: (eateryId) => ({
                url: `${EATERIES_URL}/eateries/${eateryId}`,
            }),
            keepUnusedDataFor: 1,
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
        deleteEatery: builder.mutation({
            query: (eateryId) => ({
                url: `${EATERIES_URL}/${eateryId}`,
                method: 'DELETE',
            }),
            providesTags: ['Eatery'],
        }),
    })
});

export const { 
    useGetEateryListsQuery, 
    useGetEateryByIdQuery,
    useAddEateryMutation,
    useUpdateEateryMutation,
    useDeleteEateryMutation,
} = eateriesApiSlice;