import { Request, Response } from "express";
import { ArticleService } from '../services/ArticleService';
/**
 * To test the controller we need to mock our http request using
 * moxios and a service that provide APIs for us
 * GET Req --> ArticleController --> ArticleService --> DB --> MongoDB
 */

class ArticleController {

    private articleService: ArticleService;

    constructor() {
        this.articleService = new ArticleService(); // we could use inversify to use IoC pattern here
    }
    
    index = async (req: Request, res: Response) => {

    }
}

export default new ArticleController();