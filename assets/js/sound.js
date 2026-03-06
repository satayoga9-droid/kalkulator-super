// ================== BACKSOUND SYSTEM TIKTOK VIRAL 2026 ==================
let player;
let currentSource = localStorage.getItem('musicSource') || 'youtube';
let isPlaying = localStorage.getItem('isPlaying') !== 'false';
let currentSongIndex = parseInt(localStorage.getItem('currentSongIndex')) || 0;
let volume = parseInt(localStorage.getItem('volume')) || 30;

// ================== PLAYLIST YOUTUBE (LAGU TIKTOK VIRAL 2026) ==================
const youtubePlaylist = [
    { 
        name: 'Love Me - JMSN', 
        id: 'VIDEO_ID_LOVE_ME', // Ganti dengan ID video asli nanti
        viral: 'Tren TikTok Feb 2026 - Intro paduan suara untuk momen emosional' 
    },
    { 
        name: 'Gasolina - Bad Bunny', 
        id: 'VIDEO_ID_GASOLINA',
        viral: 'Super Bowl Mix - Summer 2026 vibes' 
    },
    { 
        name: 'Berghain - Rosalia', 
        id: 'VIDEO_ID_BERGHAIN',
        viral: 'Instrumental dramatis untuk sisi chaotic' 
    },
    { 
        name: 'Brain Stew - Green Day', 
        id: 'VIDEO_ID_BRAIN_STEW',
        viral: 'Rock mood - Dark makeup & edgy outfits' 
    },
    { 
        name: 'Fantasy - Mariah Carey', 
        id: 'VIDEO_ID_FANTASY',
        viral: 'Lip-sync & dance - Feel good vibes' 
    },
    { 
        name: 'Valentina - Carla Morrison', 
        id: 'VIDEO_ID_VALENTINA',
        viral: 'Nostalgia & personal memories' 
    },
    { 
        name: 'Woman - Doja Cat', 
        id: 'VIDEO_ID_WOMAN',
        viral: 'Transformasi & reveals' 
    },
    { 
        name: 'No One Noticed - The Marias', 
        id: 'VIDEO_ID_NO_ONE_NOTICED',
        viral: 'Dreamy aesthetic - GRWM & cozy vibes' 
    },
    { 
        name: '#thatPOWER - will.i.am', 
        id: 'VIDEO_ID_THAT_POWER',
        viral: 'Momen ketemu teman yang bikin konyol' 
    },
    { 
        name: 'House - Charli XCX', 
        id: 'VIDEO_ID_HOUSE',
        viral: 'Dramatisasi situasi sepele' 
    },
    { 
        name: 'Trumpets - Jason Derulo', 
        id: 'VIDEO_ID_TRUMPETS',
        viral: 'Motivasi palsu sambil barely holding it together' 
    },
    { 
        name: 'Law and Order Theme', 
        id: 'VIDEO_ID_LAW_AND_ORDER',
        viral: 'Jadi detektif curiga sendiri' 
    },
    { 
        name: 'Twin Peaks Theme', 
        id: 'VIDEO_ID_TWIN_PEAKS',
        viral: 'Dramatisasi masalah kecil' 
    },
    { 
        name: 'Lady Lady - Olivia Dean', 
        id: 'VIDEO_ID_LADY_LADY',
        viral: 'Self-reflection & transformation' 
    },
    { 
        name: 'No Good Deed - Wicked', 
        id: 'VIDEO_ID_WICKED',
        viral: 'Momen bingung & confusion' 
    },
    { 
        name: 'Twinkling Lights - Auni', 
        id: 'VIDEO_ID_TWINKLING_LIGHTS',
        viral: 'Holiday & Christmas vibes' 
    },
    { 
        name: 'What Is Love (Remix)', 
        id: 'VIDEO_ID_WHAT_IS_LOVE',
        viral: '90s vibes - "I\'m just a simple girl"' 
    },
    { 
        name: 'Lush Life - Zara Larsson', 
        id: 'VIDEO_ID_LUSH_LIFE',
        viral: 'Dance challenge' 
    },
    { 
        name: 'Your Love Is My Drug - Kesha', 
        id: 'VIDEO_ID_KESHA',
        viral: '"Hey, so I got a question..."' 
    },
    { 
        name: 'Neon Dreams - Luna Ray', 
        id: 'VIDEO_ID_NEON_DREAMS',
        viral: 'Aesthetic & vlog hujan - Sped up version' 
    },
    { 
        name: 'Midnight Echoes - Synthetix', 
        id: 'VIDEO_ID_MIDNIGHT_ECHOES',
        viral: 'Transisi fesyen & futuristik' 
    },
    { 
        name: 'Rindu Digital - Aruna', 
        id: 'VIDEO_ID_RINDU_DIGITAL',
        viral: 'Konten galau Indonesia - Lofi edit' 
    },
    { 
        name: 'Cyber-Beat 2026 - DJ X', 
        id: 'VIDEO_ID_CYBER_BEAT',
        viral: 'Dance challenge global' 
    }
];

// ================== YOUTUBE API ==================
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: youtubePlaylist[currentSongIndex].id,
        playerVars: {
            'autoplay': isPlaying ? 1 : 0,
            'controls': 0,
            'disablekb': 1,
            'enablejsapi': 1,
            'loop': 1,
            'playlist': youtubePlaylist[currentSongIndex].id
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    player.setVolume(volume);
    updateNowPlaying();
}

function onPlayerStateChange(event) {
    if(event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

// ================== SOURCE SELECTOR ==================
function setMusicSource(source) {
    currentSource = source;
    localStorage.setItem('musicSource', source);
    
    document.querySelectorAll('.source-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerHTML.includes(source === 'youtube' ? 'YouTube' : 'Spotify')) {
            btn.classList.add('active');
        }
    });
    
    if(source === 'youtube') {
        document.getElementById('youtube-controls').style.display = 'flex';
        document.getElementById('spotify-controls').style.display = 'none';
        if(player) {
            player.loadVideoById(youtubePlaylist[currentSongIndex].id);
            if(isPlaying) player.playVideo();
        }
    } else {
        document.getElementById('youtube-controls').style.display = 'none';
        document.getElementById('spotify-controls').style.display = 'flex';
        window.open('https://open.spotify.com', '_blank');
    }
}

// ================== PLAYBACK CONTROL ==================
function playPause() {
    if(currentSource === 'youtube' && player) {
        if(isPlaying) player.pauseVideo();
        else player.playVideo();
    }
    isPlaying = !isPlaying;
    localStorage.setItem('isPlaying', isPlaying);
    updatePlayIcon();
}

function nextSong() {
    if(currentSource === 'youtube') {
        currentSongIndex = (currentSongIndex + 1) % youtubePlaylist.length;
        localStorage.setItem('currentSongIndex', currentSongIndex);
        player.loadVideoById(youtubePlaylist[currentSongIndex].id);
        if(isPlaying) player.playVideo();
        updateNowPlaying();
    }
}

function prevSong() {
    if(currentSource === 'youtube') {
        currentSongIndex = (currentSongIndex - 1 + youtubePlaylist.length) % youtubePlaylist.length;
        localStorage.setItem('currentSongIndex', currentSongIndex);
        player.loadVideoById(youtubePlaylist[currentSongIndex].id);
        if(isPlaying) player.playVideo();
        updateNowPlaying();
    }
}

function setVolume(val) {
    volume = val;
    if(player) player.setVolume(val);
    localStorage.setItem('volume', val);
}

function updateNowPlaying() {
    let song = youtubePlaylist[currentSongIndex];
    document.getElementById('nowPlaying').innerHTML = `🎵 ${song.name}`;
    document.getElementById('viralContext').innerHTML = `📌 ${song.viral}`;
}

function updatePlayIcon() {
    let icon = document.getElementById('playIcon');
    if(icon) {
        icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    }
}

// ================== PLAYLIST MODAL ==================
function showPlaylist() {
    let html = '<h3>📋 Playlist TikTok Viral 2026</h3><div class="playlist-grid">';
    youtubePlaylist.forEach((song, index) => {
        html += `
            <div class="playlist-item ${index === currentSongIndex ? 'active' : ''}" onclick="jumpToSong(${index})">
                <span class="song-name">${song.name}</span>
                <span class="song-context">${song.viral}</span>
            </div>
        `;
    });
    html += '</div>';
    
    let modal = document.getElementById('playlistModal');
    modal.innerHTML = html;
    modal.style.display = 'block';
}

function jumpToSong(index) {
    currentSongIndex = index;
    localStorage.setItem('currentSongIndex', index);
    player.loadVideoById(youtubePlaylist[index].id);
    if(isPlaying) player.playVideo();
    updateNowPlaying();
    document.getElementById('playlistModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(e) {
    let modal = document.getElementById('playlistModal');
    if(e.target === modal) {
        modal.style.display = 'none';
    }
}

// ================== INIT ==================
document.addEventListener('DOMContentLoaded', () => {
    setMusicSource(currentSource);
    updatePlayIcon();
});
