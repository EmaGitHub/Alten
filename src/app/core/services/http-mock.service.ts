import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Post } from "src/app/interfaces/post.interface";
import { User } from "src/app/interfaces/user.interface";
import posts from "src/app/mock-data/posts.mock";
import users from "src/app/mock-data/users.mock";

@Injectable({
    providedIn: 'root'
})
export class HttpMockService {
    
    getPosts(): Observable<Post[]> {
        return of(posts).pipe(delay(1000));
    }

    getUsers(): Observable<User[]> {
        return of(users).pipe(delay(0));
    }
}