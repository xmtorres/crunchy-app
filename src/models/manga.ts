export interface Manga{
    id: number;
    categoryId: number;
    title: string;
    author: string;
    description: string;
    chapters: number;
    isComplete: boolean;
    imageURL: string;
}
