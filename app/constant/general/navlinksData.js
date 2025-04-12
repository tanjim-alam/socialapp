import {
    FaYoutube, FaFacebook, FaInstagramSquare, FaTwitter, FaTiktok, FaSpotify,
    FaSoundcloud, FaLinkedinIn, FaPinterest, FaSnapchatGhost, FaRedditAlien, FaTwitch
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const navlinksData = [
    {
        id: 1,
        name: "Facebook",
        icon: FaFacebook,
        services: [
            { id: 1, title: "Buy Facebook Followers", slug: "/buy-facebook-followers" },
            { id: 2, title: "Buy Facebook Likes", slug: "/buy-facebook-likes" },
            { id: 3, title: "Buy Facebook Video Views", slug: "/buy-facebook-video-views" },
            { id: 4, title: "Buy Facebook Comments", slug: "/buy-facebook-custom-comments" },
            { id: 5, title: "Buy Facebook Page Likes", slug: "/buy-facebook-page-likes" },
            { id: 6, title: "Buy Facebook Live Views", slug: "/buy-facebook-live-stream-views" }
        ],
        color: "#155dfc"
    },
    {
        id: 2,
        name: "Instagram",
        icon: FaInstagramSquare,
        services: [
            { id: 1, title: "Buy Instagram Followers", slug: "/buy-instagram-followers" },
            { id: 2, title: "Buy Instagram Likes", slug: "/buy-instagram-likes" },
            { id: 3, title: "Buy Instagram Reels Likes", slug: "/buy-instagram-reels-likes" },
            { id: 4, title: "Buy Instagram Reels Views", slug: "/buy-instagram-reels-views" },
            { id: 5, title: "Buy Instagram Comments", slug: "/buy-instagram-custom-comments" },
            { id: 6, title: "Buy Instagram Story Views", slug: "/buy-instagram-story-views" },
            { id: 7, title: "Buy Instagram Female Likes", slug: "/buy-instagram-female-likes" },
            { id: 8, title: "Buy Instagram Female Followers", slug: "/buy-instagram-female-followers" },
            { id: 9, title: "Buy Instagram Live Views", slug: "/buy-instagram-live-stream-views" },
        ],
        color: "#fb3c44"
    },
    {
        id: 3,
        name: "YouTube",
        icon: FaYoutube,
        services: [
            { id: 1, title: "Buy YouTube Views", slug: "/buy-youtube-views" },
            { id: 2, title: "Buy YouTube Subscribers", slug: "/buy-youtube-subscribers" },
            { id: 3, title: "Buy YouTube Likes", slug: "/buy-youtube-likes" },
            { id: 4, title: "Buy YouTube Short Views", slug: "/buy-youtube-short-views" },
            { id: 5, title: "Buy YouTube Comments", slug: "/buy-youtube-comments" },
            { id: 6, title: "Buy YouTube Live Views", slug: "/buy-youtube-live-stream-views-viewers" },
        ],
        color: "red"
    },
    {
        id: 4,
        name: "Twitter (X)",
        icon: FaTwitter,
        services: [
            { id: 1, title: "Buy Twitter (X) Followers", slug: "/buy-twitter-followers" },
            { id: 2, title: "Buy Twitter (X) Likes", slug: "/buy-twitter-likes" },
            { id: 3, title: "Buy Twitter (X) Retweets", slug: "/buy-twitter-retweets" },
            { id: 4, title: "Buy Twitter (X) Video Views", slug: "/buy-twitter-video-views" },
        ],
        color: "#1DA1F2"
    },
    {
        id: 5,
        name: "TikTok",
        icon: FaTiktok,
        services: [
            { id: 1, title: "Buy TikTok Followers", slug: "/buy-tiktok-followers" },
            { id: 2, title: "Buy TikTok Likes", slug: "/buy-tiktok-likes" },
            { id: 3, title: "Buy TikTok Views", slug: "/buy-tiktok-views" },
            { id: 4, title: "Buy TikTok Comments", slug: "/buy-tiktok-comments" },
        ],
        color: "#000000"
    },
    {
        id: 6,
        name: "Spotify",
        icon: FaSpotify,
        services: [
            { id: 1, title: "Buy Spotify Followers", slug: "/buy-spotify-followers" },
            { id: 2, title: "Buy Spotify Plays", slug: "/buy-spotify-plays" }
        ],
        color: "#1DB954"
    },
    {
        id: 7,
        name: "SoundCloud",
        icon: FaSoundcloud,
        services: [
            { id: 1, title: "Buy SoundCloud Followers", slug: "/buy-soundcloud-followers" },
            { id: 2, title: "Buy SoundCloud Plays", slug: "/buy-soundcloud-plays" },
        ],
        color: "#FF5500"
    },
    {
        id: 8,
        name: "LinkedIn",
        icon: FaLinkedinIn,
        services: [
            { id: 1, title: "Buy LinkedIn Followers", slug: "/buy-linkedin-followers" },
            { id: 2, title: "Buy LinkedIn Connections", slug: "/buy-linkedin-connections" },
            { id: 3, title: "Buy LinkedIn Likes", slug: "/buy-linkedin-likes" },
        ],
        color: "#0A66C2"
    },
    {
        id: 9,
        name: "Pinterest",
        icon: FaPinterest,
        services: [
            { id: 1, title: "Buy Pinterest Followers", slug: "/buy-pinterest-followers" },
            { id: 2, title: "Buy Pinterest Repins", slug: "/buy-pinterest-repins" },
            { id: 2, title: "Buy Pinterest Reactions", slug: "/buy-pinterest-reactions" },
            { id: 2, title: "Buy Pinterest Likes", slug: "/buy-pinterest-likes" },
        ],
        color: "#E60023"
    },
    {
        id: 10,
        name: "Snapchat",
        icon: FaSnapchatGhost,
        services: [
            { id: 1, title: "Buy Snapchat Followers", slug: "/buy-snapchat-followers" },
            { id: 2, title: "Buy Snapchat Likes", slug: "/buy-snapchat-likes" },
        ],
        color: "#FFFC00"
    },
    {
        id: 11,
        name: "Threads",
        icon: FaSquareThreads,
        services: [
            { id: 1, title: "Buy Threads Followers", slug: "/buy-threads-followers" },
            { id: 2, title: "Buy Threads likes", slug: "/buy-threads-likes" },
            { id: 3, title: "Buy Threads Comments", slug: "/buy-threads-comments" },
        ],
        color: "#0a0a0a"
    },
    {
        id: 12,
        name: "Twitch",
        icon: FaTwitch,
        services: [
            { id: 1, title: "Buy Twitch Followers", slug: "/buy-twitch-followers" },
            { id: 2, title: "Buy Twitch Views", slug: "/buy-twitch-views" },
            { id: 2, title: "Buy Twitch Live Viewers", slug: "/buy-twitch-live-viewers" },
        ],
        color: "#9146FF"
    }
];

export default navlinksData