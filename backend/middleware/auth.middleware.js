const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token || token !== "123456") {
      return res.status(401).json({ error: "Accès non autorisé" });
    }
  
    next(); // autorisé à continuer
  };
  
  module.exports = authMiddleware;
  