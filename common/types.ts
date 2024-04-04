export type Domain = {
    id: number;
    name: string;
    completed: boolean;
    domainQuestion: DomainQuestion;
}

export type DomainQuestion = {
    text: string;
    possibleAnswers: Answer[];
}

export type Answer = {
    text: string;
    correct: boolean;
}

export type Question = {
    id: number;
    text: string;
    completed: boolean;
    possibleAnswers: Answer[];
}

