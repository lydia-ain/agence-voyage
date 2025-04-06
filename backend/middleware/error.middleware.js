const errorHandler = (err, req, res, next) => {
    console.error("❌ Erreur détectée :", err.stack);
    res.status(500).json({ error: "Une erreur interne est survenue." });
  };
  
  module.exports = errorHandler;
  