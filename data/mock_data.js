import MainUser from '../assets/1.jpg';
import UserPhoto from '../assets/user.jpg';
import UserPost2 from '../assets/5.jpg'; 
import PostPhoto1 from '../assets/user1.jpg';
import PostPhoto2 from '../assets/user2.jpg';
import PostPhoto3 from '../assets/words1.jpg';
import PostPhoto4 from '../assets/words2.jpg';
import Highlight from '../assets/icon.png';

export const MOCK_DATA = {
    users: {
        "user_1": {
            id: "user_1",
            name: "Nirina Isaia",
            username: "isaia_joelle",
            image: MainUser,
            location: "Antananarivo, Madagascar",
            bio: "My mercy prevails over my wrath - TWD",
            stats:  {
                posts: "1",
                followers: "844",
                following: "246"
            },
            hasStory: false,
            showPlusIcon: true,
            highlights: ["h1", "h2"],
            posts: ["p1"]
        },
        "user_2": {
            id: "user_2",
            name: "Kim Tae",
            username: "k_drama_lover",
            image: UserPhoto,
            location: "Antananarivo, Madagascar",
            bio: "K-drama enthusiast. Sharing my love for all things Korean. #KDramaLover",
            stats:  {
                posts: "2",
                followers: "1.2k",
                following: "300"
            },
            hasStory: true,
            highlights: [],
            posts: ["p2", "p3"]
        },
        "user_3": {
            id: "user_3",
            name: "Sarah",
            username: "words_unsaid",
            location: "Somewhere",
            bio: "Passionate about words and their meanings. #WordsUnsaid",
            stats:  {
                posts: "1",
                followers: "500",
                following: "150"
            },
            hasStory: true,
            highlights: [],
            posts: ["p4", "p5"]
        }
    },

    posts: [
        {
            id: "p1",
            userId: "user_1",
            images: [UserPost2],
            likes: "120",
            comments: "3",
            caption: "Own pace, own lane, own rule",
            date: "2026-04-24"
        },
        {
            id: "p2",
            userId: "user_2",
            images: [PostPhoto1, PostPhoto2],
            likes: "2.5k",
            comments: "150",
            caption: "Two of the best couples in K-drama world",
            date: "2026-04-23"
        },
        {
            id: "p4",
            userId: "user_2",
            images: [PostPhoto3, PostPhoto4],
            likes: "158k",
            comments: "5000",
            caption: "Love is one of the most beautiful feelings, but also the worst when it ends. #heartbreak #lovequotes",
            date: "2026-04-22"
        },
    ],

    notes: [
        {
            id: "n1",
            userId: "user_2",
            text: "Just finished watching the latest episode of my favorite K-drama!",
        },
        {
            id: "n2",
            userId: "user_3",
            text: "Feeling inspired by the beauty of words today",
        }
    ],

    highlights: {
        "h1": { id: "h1", title: "Life", image: Highlight },
        "h2": { id: "h2", title: "Training", image: Highlight }
    }
};