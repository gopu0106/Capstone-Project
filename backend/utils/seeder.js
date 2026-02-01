import User from '../models/User.js';
import Video from '../models/Video.js';
import Channel from '../models/Channel.js';
import Comment from '../models/Comment.js';

const seedData = async () => {
    try {
        const videoCount = await Video.countDocuments();
        if (videoCount > 0) {
            console.log('Database already has data. Skipping seed.');
            return;
        }

        console.log('Seeding database...');

        // 1. Create a sample user
        const user = await User.create({
            username: 'demo_user',
            email: 'test@example.com',
            password: 'password123', // Will be hashed by pre-save hook
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo'
        });

        // 2. Create a sample channel
        const channel = await Channel.create({
            channelName: 'Capstone Media',
            description: 'The official channel for YouTube Clone Project',
            owner: user._id
        });

        // Update user's channels
        user.channels.push(channel._id);
        await user.save();

        // 3. Define sample videos
        const videos = [
            {
                title: 'Big Buck Bunny',
                description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.',
                videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
                category: 'Movies',
                uploader: user._id,
                channelId: channel._id,
                views: 1250,
            },
            {
                title: 'Elephant Dream',
                description: 'The first open movie project ever created.',
                videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
                category: 'Music',
                uploader: user._id,
                channelId: channel._id,
                views: 890,
            },
            {
                title: 'For Bigger Blazes',
                description: 'HBO GO now works with Chromecast.',
                videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
                category: 'Gaming',
                uploader: user._id,
                channelId: channel._id,
                views: 4500,
            },
            {
                title: 'For Bigger Escapes',
                description: 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV.',
                videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
                category: 'Code',
                uploader: user._id,
                channelId: channel._id,
                views: 3200,
            },
            {
                title: 'For Bigger Fun',
                description: 'Next generation entertainment is here.',
                videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
                thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
                category: 'News',
                uploader: user._id,
                channelId: channel._id,
                views: 1560,
            },
            {
                title: 'For Bigger Joyrides',
                description: 'Experience the magic of the open road.',
                videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
                category: 'Sports',
                uploader: user._id,
                channelId: channel._id,
                views: 780,
            }
        ];

        const createdVideos = await Video.insertMany(videos);

        // Update channel with video IDs
        channel.videos = createdVideos.map(v => v._id);
        await channel.save();

        // 4. Create some sample comments
        const sampleComments = [
            {
                videoId: createdVideos[0]._id,
                userId: user._id,
                text: 'Wow, this is an amazing project!'
            },
            {
                videoId: createdVideos[0]._id,
                userId: user._id,
                text: 'The UI looks really premium.'
            }
        ];

        await Comment.insertMany(sampleComments);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

export default seedData;
