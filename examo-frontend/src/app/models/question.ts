import { Answer } from "./answer";

export class Question {

    constructor(
        public question:string,
        public answers:Answer[],
        public topic:string,
        public difficulty?: string,
        public topic2?: string,
        public image?: any,
        public explanation?: string
    ){}

}