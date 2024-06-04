const notFoundHanlder = (req, res, next) => {
    res.status(404).json({ message: "not found หาหน้าไม่เจอ" });
}

module.exports = notFoundHanlder;
