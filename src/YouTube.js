const SoundCloud = require('./SoundCloud');

class YouTube {
    static async search(query) {
        console.log(`[YouTube-Bypass] Redirecting search for: "${query}" to SoundCloud.`);
        return await SoundCloud.search(query);
    }
    static async getTrackData(query) {
        return await SoundCloud.search(query);
    }
}

module.exports = YouTube;
