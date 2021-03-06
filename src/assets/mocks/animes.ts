import { Anime } from '../../app/models/anime';

export const ANIMES: Anime[] = [
  {
    id: 1,
    categoryId: 1,
    title: 'My Hero Academia',
    description: 'Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.',
    episodes: 88,
    isComplete: false,
    imageURL: 'https://i2.wp.com/lacomikeria.com/wp-content/uploads/2020/04/c5c213f074e0325713cce87b281fc78e8b978b95r1-722-1024v2_uhq.jpg?resize=600%2C400&ssl=1',
    },
    {
        id: 2,
        categoryId: 2,
        title: 'My Little Monster',
        description: 'Impassive girl meets trouble maker in a brand new love story! After Mizutani Shizuku, a girl whose sole interest is studying, is asked to deliver some handouts to Yoshida Haru, a boy who hasn\'t come to school after spilling blood on the first day, she finds herself the target of his affection. This is a story about a boy and a girl who struggle with love and friendship. Opening yourself up to other people forces you to be honest with yourself.',
        episodes: 13,
        isComplete: true,
        imageURL: 'https://i.pinimg.com/originals/a0/92/54/a09254f34a19bcbd85d99caffb6a3ee4.png',
    },
    {
        id: 3,
        categoryId: 3,
        title: 'Bungou Stray Dogs',
        description: 'Kicked out of his orphanage and on the verge of starving to death, Nakajima Atsushi meets some strange men. One of them, Dazai Osamu, is a suicidal man attempting to drown himself in broad daylight. The other, bespectacled Kunikida Doppo, nervously stands by flipping through a notepad. Both are members of the "Armed Detective Agency" said to solve incidents that even the military and police won\'t touch. Atsushi ends up accompanying them on a mission to eliminate a man-eating tiger that\'s been terrorizing the population...',
        episodes: 37,
        isComplete: true,
        imageURL: 'https://obs.line-scdn.net/0hMBCFH-r4Em1-PzqfLettOkRpEQJNUwFuGglDcy5RTFkHB1E_FlBfWFI-GVtSDFUzEApZAls8CVwAWlUyRl9f/w644',
    },
];
