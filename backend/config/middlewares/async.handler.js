module.exports.asyncHandler = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (err) {
        next(err);
    }
};
