import { JWTHelper } from '../helpers/jwt.helper.js';

const publicRoutes = ['/auth', '/docs'];

export const authMiddleware = (req, res, next) => {
  const route = req.url;
  const isAuthRouter = publicRoutes.find((item) => route.includes(item));
  if (isAuthRouter) {
    return next();
  }

  const authorization = req.headers['authorization'];
  if (!authorization) {
    return res.status(401).send({
      message: 'Access Token is required',
    });
  }

  const [_, token] = authorization.split(' ');
  if (!token) {
    return res.status(401).send({
      message: 'Access Token is invalid',
    });
  }

  const decoded = JWTHelper.verify(token);
  if (typeof decoded === 'string' && JWTHelper.JWT_ERROR_EXPIRED) {
    return res.status(401).send({
      message: JWTHelper.JWT_ERROR_EXPIRED,
    });
  }
  if (typeof decoded === 'string' && JWTHelper.JWT_ERROR_MALFORMED) {
    return res.status(401).send({
      message: JWTHelper.JWT_ERROR_MALFORMED,
    });
  }

  req.user = decoded;
  next();
};
