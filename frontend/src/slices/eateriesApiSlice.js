import { apiSlice } from './apiSlice';
const EATERIES_URL = '/api/eateries';

export const eateriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addEatery: builder.mutation({
            query: (data) => ({
                url: `${EATERIES_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
    })
});

export const { useAddEateryMutation } = eateriesApiSlice;