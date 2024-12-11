const verification = (req, res) => {
    try {
        if (!req.user || !req.user.role) {
            return res.status(400).json({ message: "User information is missing or invalid." });
        }
        res.json({
            message: `Hello, ${req.user.role}!`,
            user: { id: req.user.id, role: req.user.role }
        });
    } catch (error) {
        console.error("Error during verification:", error);
        res.status(500).json({ message: "Internal server error during verification." });
    }
};

module.exports = {
    verification
};
