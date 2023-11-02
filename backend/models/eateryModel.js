import mongoose from 'mongoose';

const eaterySchema = mongoose.Schema({
    eateryName: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: false,
    },
    menu: {
        type: String,
        required: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    imageId: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Eatery = mongoose.model('Eatery', eaterySchema);

export default Eatery;