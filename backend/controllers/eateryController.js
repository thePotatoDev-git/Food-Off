import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Eatery from '../models/eateryModel.js';

// @desc    Get user eatery list
// route    GET /api/eateries/
// @access  Private

const getEateryLists = asyncHandler(async (req, res) => {
    const eateries = await Eatery.find({ user: req.user.id }).sort({ eateryName: 1 });

    res.json(eateries);
});

// @desc    Get single eatery
// route    GET /api/eateries/:id
// @access  Private

const getEateryById = asyncHandler(async (req, res) => {
    const eatery = await Eatery.findById(req.params.id);

    if (eatery) {
        return res.json(eatery);
    } else {
        res.status(404);
        throw new Error('Eatery not found');
    }
});

// @desc    Add eatery
// route    POST /api/eateries/addEatery
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
    getEateryById,
    addEatery,
    deleteEatery,
};