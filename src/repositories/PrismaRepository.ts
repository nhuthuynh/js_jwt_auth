import { Repository } from "./Repository";
import { Article } from "../models/article";

export class PrismaRepository implements Repository {
    async articles(): Promise<Array<Article>> {
        
    }
}