import { JWTHelper } from '../helpers/jwt.helper';

export const authMiddleware = (req, res, next) => {
  const route = req.url;
  const isAuthRouter = route.includes('/auth');
  if (isAuthRouter) {
    return next();
  }

  const authorization = req.headers['authorization'];
  if (!authorization) {
    res.status(401).send({
      message: 'Access Token is required',
    });
  }

  const [_, token] = authorization.split(' ');
  if (!token) {
    res.status(401).send({
      message: 'Access Token is invalid',
    });
  }

  const decoded = JWTHelper.verify(token);
  if (typeof decoded === 'string' && JWTHelper.JWT_ERROR_EXPIRED) {
    res.status(401).send({
      message: JWTHelper.JWT_ERROR_EXPIRED,
    });
  }
  if (typeof decoded === 'string' && JWTHelper.JWT_ERROR_MALFORMED) {
    res.status(401).send({
      message: JWTHelper.JWT_ERROR_MALFORMED,
    });
  }

  req.user = decoded;
  next();
};
