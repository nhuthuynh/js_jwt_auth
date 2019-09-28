import * as express from 'express';
import ArticleController from './controllers/ArticleController';

const router = express.Router();

router.get("/articles", ArticleController.index);

export { router };