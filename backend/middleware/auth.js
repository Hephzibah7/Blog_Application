import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];
    const secretKey = process.env.secretKey;

    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // Attach user ID to the request
    req.user = { userId: decoded.userId};

    next();
  } catch (error) {
    console.error("Auth error:", error);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

export default verifyToken;
