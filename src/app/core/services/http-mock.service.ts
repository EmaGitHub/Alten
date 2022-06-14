import { Injectable } from "@angular/core";
import { Post } from "src/app/interfaces/post.interface";
import { User } from "src/app/interfaces/user.interface";
import posts from "src/app/mock-data/posts.mock";
import users from "src/app/mock-data/users.mock";

@Injectable({
    providedIn: 'root'
})
export class HttpMockService {
    
    getPosts(): Post[] {
        return posts;
    }

    getUsers(): User[] {
        return users;
    }
}