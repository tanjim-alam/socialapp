import fbLikesData from "../facebook/fbLikesData.json";
import fbFollowersData from "../facebook/fbFollowersData.json";
import fbCommentsData from "../facebook/fbCommentsData.json";
import fbPageLikesData from "../facebook/fbPageLikesData.json";
import fbVideoViewsData from "../facebook/fbVideoViewsData.json";
import fbLiveViewsData from "../facebook/fbLiveViewsData.json";
import igFollowersData from "../instagram/igFollowersData.json";
import igLikesData from "../instagram/igLikesData.json";
import igCommentsData from "../instagram/igCommentsData.json";
import igFemaleFollowersData from "../instagram/igFemaleFollowersData.json";
import igFemaleLikesData from "../instagram/igFemaleLikesData.json";
import igLiveViewsData from "../instagram/igLiveViewsData.json";
import igReelsLikesData from "../instagram/igReelsLikesData.json";
import igReelsViewsData from "../instagram/igReelsViewsData.json";
import igStoryViewsData from "../instagram/igStoryViewsData.json";
import ytCommentsData from "../youtube/ytCommentsData.json";
import ytLikesData from "../youtube/ytLikesData.json";
import ytLiveViewsData from "../youtube/ytLiveViewsData.json";
import ytViewsData from "../youtube/ytViewsData.json";
import ytSubscribersData from "../youtube/ytSubscribersData.json";
import tiktokCommentsData from "../tiktok/tiktokCommentsData.json";
import tiktokFollowersData from "../tiktok/tiktokFollowersData.json";
import tiktokLikesData from "../tiktok/tiktokLikesData.json";
import tiktokViewsData from "../tiktok/tiktokViewsData.json";
import twFollowersData from "../twitter/twFollowersData.json";
import twLikesData from "../twitter/twLikesData.json";
import twRetweetsData from "../twitter/twRetweetsData.json";
import twVideoViewsData from "../twitter/twVideoViewsData.json";
import spFollowersData from "../spotify/spFollowersData.json";
import spPlaysData from "../spotify/spPlaysData.json";
import scFollowersData from "../soundCloud/scFollowersData.json";
import scPlaysData from "../soundCloud/scPlaysData.json";
import lnConnectionsData from "../linkedin/lnConnectionsData.json";
import lnFollowersData from "../linkedin/lnFollowersData.json";
import lnLikesData from "../linkedin/lnLikesData.json";
import pinFollowersData from "../pinterest/pinFollowersData.json";
import pinLikesData from "../pinterest/pinLikesData.json";
import pinReactionsData from "../pinterest/pinReactionsData.json";
import pinRepinsData from "../pinterest/pinRepinsData.json";
import snapFollowersData from "../snapchat/scFollowersData.json";
import snapLikesData from "../snapchat/scLikesData.json";
import thCommentsData from "../threads/thCommentsData.json";
import thFollowersData from "../threads/thFollowersData.json";
import thLikesData from "../threads/thLikesData.json";
import twiFollowersData from "../twitch/twiFollowersData.json";
import twiLiveViewsData from "../twitch/twiLiveViewsData.json";
import twiViewsData from "../twitch/twiViewsData.json";

const listOfAllPackageData = [
  {
    id: 1,
    name: "Buy Facebook Followers",
    slug: '/buy-facebook-followers',
    placeholder: "Enter facebook profile link",
    package: fbFollowersData
  },
  {
    id: 2,
    name: "Buy Facebook Likes",
    slug: '/buy-facebook-likes',
    placeholder: "Enter facebook post link",
    package: fbLikesData
  },
  {
    id: 3,
    name: "Buy Facebook Comments",
    slug: '/buy-facebook-custom-comments',
    placeholder: "Enter facebook post link",
    package: fbCommentsData
  },
  {
    id: 4,
    name: "Buy Facebook Video Views",
    slug: '/buy-facebook-video-views',
    placeholder: "Enter facebook video link",
    package: fbVideoViewsData
  },
  {
    id: 5,
    name: "Buy Facebook Page Likes",
    slug: '/buy-facebook-page-likes',
    placeholder: "Enter facebook page link",
    package: fbPageLikesData
  },
  {
    id: 6,
    name: "Buy Facebook Live Views",
    slug: '/buy-facebook-live-stream-views',
    placeholder: "Enter facebook live link",
    package: fbLiveViewsData
  },
  {
    id: 7,
    name: "Buy Instagram Followers",
    slug: '/buy-instagram-followers',
    placeholder: "Enter instagram profile link",
    package: igFollowersData
  },
  {
    id: 7,
    name: "Buy Instagram Likes",
    slug: '/buy-instagram-likes',
    placeholder: "Enter instagram post link",
    package: igLikesData
  },
  {
    id: 8,
    name: "Buy Instagram Custom Comments",
    slug: '/buy-instagram-custom-comments',
    placeholder: "Enter instagram post link",
    package: igCommentsData
  },
  {
    id: 9,
    name: "Buy Instagram Female Followers",
    slug: '/buy-instagram-female-followers',
    placeholder: "Enter instagram profile link",
    package: igFemaleFollowersData
  },
  {
    id: 10,
    name: "Buy Instagram Female Likes",
    slug: '/buy-instagram-female-likes',
    placeholder: "Enter instagram post link",
    package: igFemaleLikesData
  },
  {
    id: 11,
    name: "Buy Instagram Live Views",
    slug: '/buy-instagram-live-stream-views',
    placeholder: "Enter instagram live link",
    package: igLiveViewsData
  },
  {
    id: 12,
    name: "Buy Instagram Reels Likes",
    slug: '/buy-instagram-reels-likes',
    placeholder: "Enter instagram reels link",
    package: igReelsLikesData
  },
  {
    id: 13,
    name: "Buy Instagram Reels Views",
    slug: '/buy-instagram-reels-views',
    placeholder: "Enter instagram reels link",
    package: igReelsViewsData
  },
  {
    id: 14,
    name: "Buy Instagram Story Views",
    slug: '/buy-instagram-story-views',
    placeholder: "Enter instagram story link",
    package: igStoryViewsData
  },
  {
    id: 15,
    name: "Buy YouTube Views",
    slug: '/buy-youtube-views',
    placeholder: "Enter youtube video link",
    package: ytViewsData
  },
  {
    id: 16,
    name: "Buy YouTube Comments",
    slug: '/buy-youtube-comments',
    placeholder: "Enter youtube video link",
    package: ytCommentsData
  },
  {
    id: 17,
    name: "Buy YouTube Likes",
    slug: '/buy-youtube-likes',
    placeholder: "Enter youtube video link",
    package: ytLikesData
  },
  {
    id: 18,
    name: "Buy YouTube Subscribers",
    slug: '/buy-youtube-subscribers',
    placeholder: "Enter youtube chennal link",
    package: ytSubscribersData
  },
  {
    id: 19,
    name: "Buy YouTube Live Views",
    slug: '/buy-youtube-live-stream-views-viewers',
    placeholder: "Enter youtube live link",
    package: ytLiveViewsData
  },
  {
    id: 20,
    name: "Buy YouTube Short Views",
    slug: '/buy-youtube-short-views',
    placeholder: "Enter youtube video link",
    package: ytViewsData
  },
  {
    id: 21,
    name: "Buy TikTok Comment",
    slug: '/buy-tiktok-comments',
    placeholder: "Enter post link",
    package: tiktokCommentsData
  },
  {
    id: 22,
    name: "Buy TikTok Followers",
    slug: '/buy-tiktok-followers',
    placeholder: "Enter profile link",
    package: tiktokFollowersData
  },
  {
    id: 23,
    name: "Buy TikTok Likes",
    slug: '/buy-tiktok-likes',
    placeholder: "Enter video link",
    package: tiktokLikesData
  },
  {
    id: 24,
    name: "Buy TikTok Views",
    slug: '/buy-tiktok-views',
    placeholder: "Enter video link",
    package: tiktokViewsData
  },
  {
    id: 25,
    name: "Buy Twitter (X) Followers",
    slug: '/buy-twitter-followers',
    placeholder: "Enter profile link",
    package: twFollowersData
  },
  {
    id: 26,
    name: "Buy Twitter (X) Likes",
    slug: '/buy-twitter-likes',
    placeholder: "Enter post link",
    package: twLikesData
  },
  {
    id: 26,
    name: "Buy Twitter (X) ReTweets",
    slug: '/buy-twitter-retweets',
    placeholder: "Enter post link",
    package: twRetweetsData
  },
  {
    id: 27,
    name: "Buy Twitter (X) Video Views",
    slug: '/buy-twitter-video-views',
    placeholder: "Enter video link",
    package: twVideoViewsData
  },
  {
    id: 28,
    name: "Buy Spotify Followers",
    slug: '/buy-spotify-followers',
    placeholder: "Enter profile link",
    package: spFollowersData
  },
  {
    id: 29,
    name: "Buy Spotify Plays",
    slug: '/buy-spotify-plays',
    placeholder: "Enter post link",
    package: spPlaysData
  },
  {
    id: 30,
    name: "Buy SoundCloud Followers",
    slug: '/buy-soundcloud-followers',
    placeholder: "Enter profile link",
    package: scFollowersData
  },
  {
    id: 31,
    name: "Buy SoundCloud Plays",
    slug: '/buy-soundcloud-plays',
    placeholder: "Enter post link",
    package: scPlaysData
  },
  {
    id: 32,
    name: "Buy Linkedin Connections",
    slug: '/buy-linkedin-connections',
    placeholder: "Enter profile link",
    package: lnConnectionsData
  },
  {
    id: 33,
    name: "Buy Linkedin Followers",
    slug: '/buy-linkedin-followers',
    placeholder: "Enter profile link",
    package: lnFollowersData
  },
  {
    id: 34,
    name: "Buy Linkedin likes",
    slug: '/buy-linkedin-likes',
    placeholder: "Enter post link",
    package: lnLikesData
  },
  {
    id: 35,
    name: "Buy Pinterest Followers",
    slug: '/buy-pinterest-followers',
    placeholder: "Enter profile link",
    package: pinFollowersData
  },
  {
    id: 36,
    name: "Buy Pinterest Likes",
    slug: '/buy-pinterest-likes',
    placeholder: "Enter post link",
    package: pinLikesData
  },
  {
    id: 37,
    name: "Buy Pinterest Reactions",
    slug: '/buy-pinterest-reactions',
    placeholder: "Enter post link",
    package: pinReactionsData
  },
  {
    id: 38,
    name: "Buy Pinterest Repins",
    slug: '/buy-pinterest-repins',
    placeholder: "Enter post link",
    package: pinRepinsData
  },
  {
    id: 39,
    name: "Buy Snapchat Followers",
    slug: '/buy-snapchat-followers',
    placeholder: "Enter profile link",
    package: snapFollowersData
  },
  {
    id: 40,
    name: "Buy Snapchat Likes",
    slug: '/buy-snapchat-likes',
    placeholder: "Enter post link",
    package: snapLikesData
  },
  {
    id: 41,
    name: "Buy Threads Comments",
    slug: '/buy-threads-comments',
    placeholder: "Enter post link",
    package: thCommentsData
  },
  {
    id: 42,
    name: "Buy Threads Followers",
    slug: '/buy-threads-followers',
    placeholder: "Enter profile link",
    package: thFollowersData
  },
  {
    id: 43,
    name: "Buy Threads Likes",
    slug: '/buy-threads-likes',
    placeholder: "Enter post link",
    package: thLikesData
  },
  {
    id: 44,
    name: "Buy Twitch Followers",
    slug: '/buy-twitch-followers',
    placeholder: "Enter profile link",
    package: twiFollowersData
  },
  {
    id: 45,
    name: "Buy Twitch Live Views",
    slug: '/buy-twitch-live-viewers',
    placeholder: "Enter live link",
    package: twiLiveViewsData
  },
  {
    id: 46,
    name: "Buy Twitch Views",
    slug: '/buy-twitch-views',
    placeholder: "Enter video link",
    package: twiViewsData
  },
];

export default listOfAllPackageData;