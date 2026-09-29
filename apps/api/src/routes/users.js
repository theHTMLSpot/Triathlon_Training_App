import express from "express";
const router = express.Router();

// Define your user-related routes here
router.get('/', (req, res) => {
    res.send('User route');
});

router
    .route('/:id').get((req, res) => {
        const userId = req.params.id;
        res.send(`User ID: ${userId}`);
    }).post((req, res) => {
        // Handle user creation logic here
        res.send('User created');
    }).put((req, res) => {
        const userId = req.params.id;
        // Handle user update logic here
        res.send(`User ID: ${userId} updated`);
    }).delete((req, res) => {
        const userId = req.params.id;
        // Handle user deletion logic here
        res.send(`User ID: ${userId} deleted`);
    });

router
    .param('id', (req, res, next, id) => {

        req.userId = id;
        if (!id) {
            return res.status(404).send('User not found');
        }
        if (isNaN(id)) {
            return res.status(400).send('Invalid user ID');
        }
        if (parseInt(id) <= 0) {
            return res.status(400).send('User ID must be a positive integer');
        }
        next();
    });



export default router;