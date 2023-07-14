import asyncHandler from 'express-async-handler';
import Eatery from '../models/eateryModel.js';

// @desc    Get user eatery list
// route    GET /api/eateries/lists
// @access  Private

const getEateryLists = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get eatery lists' });
});

// @desc    Add eatery
// route    POST /api/eateries
// @access  Private

const addEatery = asyncHandler(async (req, res) => {
    const { eateryName, budget, location, menu, user } = req.body; // Gets req.body values from values in AddEntry react component

    try {
        // Creates an entry in MongoDB with listed values
        const eatery = await Eatery.create({
            eateryName,
            budget,
            location,
            menu,
            user,
        });
        console.log('Added eatery');
        res.json(eatery);
    } catch (err) {
        console.log(err);
    }
    console.log(req.body);
});

// @desc    Delete eatery
// route    DELETE /api/eateries
// @access  Private

const deleteEatery = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Eatery deleted' });
});

export {
    getEateryLists,
    addEatery,
    deleteEatery,
};