// Grace Church Songbook - JavaScript

// Sample Songs Data with Chords
const songs = [
    {
        id: 1,
        title: "Amazing Grace",
        page: 1,
        author: "John Newton",
        preview: "Amazing grace! How sweet the sound that saved a wretch like me...",
        content: [
            { chords: "G           Em          C            D", lyrics: "A - ma - zing grace! How sweet the sound" },
            { chords: "G           Em          C            D", lyrics: "That saved a wretch like me!" },
            { chords: "C           D           G            Em", lyrics: "I once was lost, but now am found;" },
            { chords: "C           D           G", lyrics: "Was blind, but now I see." },
            { chords: "", lyrics: "" },
            { chords: "G           Em          C            D", lyrics: "'Twas grace that taught my heart to fear," },
            { chords: "G           Em          C            D", lyrics: "And grace my fears relieved;" },
            { chords: "C           D           G            Em", lyrics: "How precious did that grace appear" },
            { chords: "C           D           G", lyrics: "The hour I first believed." }
        ]
    },
    {
        id: 2,
        title: "Holy, Holy, Holy",
        page: 2,
        author: "Reginald Heber",
        preview: "Holy, holy, holy! Lord God Almighty! Early in the morning our song shall rise to Thee...",
        content: [
            { chords: "C           F           C            G", lyrics: "Ho - ly, ho - ly, ho - ly! Lord God Al - might - y!" },
            { chords: "F           C           Dm           G", lyrics: "Ear - ly in the morn - ing our song shall rise to Thee;" },
            { chords: "C           F           C            G", lyrics: "Ho - ly, ho - ly, ho - ly! Mer - ci - ful and Might - y!" },
            { chords: "F           G           C", lyrics: "God in Three Per - sons, bless - ed Trin - i - ty!" },
            { chords: "", lyrics: "" },
            { chords: "C           F           C            G", lyrics: "Ho - ly, ho - ly, ho - ly! all the saints a - dore Thee," },
            { chords: "F           C           Dm           G", lyrics: "Cast - ing down their gold - en crowns a - round the glass - y sea;" },
            { chords: "C           F           C            G", lyrics: "Cher - u - bim and ser - a - phim fall - ing down be - fore Thee," },
            { chords: "F           G           C", lyrics: "Which wert, and art, and ev - er - more shalt be." }
        ]
    },
    {
        id: 3,
        title: "How Great Thou Art",
        page: 3,
        author: "Carl Gustav Boberg",
        preview: "O Lord my God, when I in awesome wonder consider all the worlds Thy hands have made...",
        content: [
            { chords: "G           C           G            D", lyrics: "O Lord my God, when I in awe - some won - der" },
            { chords: "G           C           G            D", lyrics: "Con - sid - er all the worlds Thy hands have made," },
            { chords: "C           D           G            Em", lyrics: "I see the stars, I hear the might - y thun - der," },
            { chords: "C           D           G", lyrics: "Thy pow'r through - out the u - ni - verse dis - played." },
            { chords: "", lyrics: "" },
            { chords: "G           C           G            D", lyrics: "Then sings my soul, my Sav - ior God, to Thee:" },
            { chords: "G           C           G            D", lyrics: "How great Thou art! How great Thou art!" },
            { chords: "C           D           G            Em", lyrics: "Then sings my soul, my Sav - ior God, to Thee:" },
            { chords: "C           D           G", lyrics: "How great Thou art! How great Thou art!" }
        ]
    },
    {
        id: 4,
        title: "Be Thou My Vision",
        page: 4,
        author: "Traditional Irish Hymn",
        preview: "Be Thou my vision, O Lord of my heart; naught be all else to me, save that Thou art...",
        content: [
            { chords: "D           G           D            A", lyrics: "Be Thou my Vi - sion, O Lord of my heart;" },
            { chords: "D           G           D            A", lyrics: "Naught be all else to me, save that Thou art." },
            { chords: "G           A           D            Bm", lyrics: "Thou my best Thought, by day or by night," },
            { chords: "G           A           D", lyrics: "Wa - king or sleep - ing, Thy pre - sence my light." },
            { chords: "", lyrics: "" },
            { chords: "D           G           D            A", lyrics: "Be Thou my Wis - dom, and Thou my true Word;" },
            { chords: "D           G           D            A", lyrics: "I ev - er with Thee and Thou with me, Lord;" },
            { chords: "G           A           D            Bm", lyrics: "Thou my great Fa - ther, I Thy true son;" },
            { chords: "G           A           D", lyrics: "Thou in me dwell - ing, and I with Thee one." }
        ]
    },
    {
        id: 5,
        title: "Great is Thy Faithfulness",
        page: 5,
        author: "Thomas O. Chisholm",
        preview: "Great is Thy faithfulness, O God my Father; there is no shadow of turning with Thee...",
        content: [
            { chords: "F           C           F            C", lyrics: "Great is Thy faith - ful - ness, O God my Fa - ther;" },
            { chords: "F           C           F            C", lyrics: "There is no shad - ow of turn - ing with Thee;" },
            { chords: "Bb          C           F            Dm", lyrics: "Thou chang - est not, Thy com - pas - sions, they fail not" },
            { chords: "Bb          C           F", lyrics: "As Thou hast been Thou for - ev - er wilt be." },
            { chords: "", lyrics: "" },
            { chords: "F           C           F            C", lyrics: "Great is Thy faith - ful - ness! Great is Thy faith - ful - ness!" },
            { chords: "F           C           F            C", lyrics: "Morn - ing by morn - ing new mer - cies I see;" },
            { chords: "Bb          C           F            Dm", lyrics: "All I have need - ed Thy hand has pro - vid - ed" },
            { chords: "Bb          C           F", lyrics: "Great is Thy faith - ful - ness, Lord, un - to me!" }
        ]
    },
    {
        id: 6,
        title: "It is Well with My Soul",
        page: 6,
        author: "Horatio G. Spafford",
        preview: "When peace, like a river, attendeth my way, when sorrows like sea billows roll...",
        content: [
            { chords: "Eb          Ab          Eb           Bb", lyrics: "When peace, like a riv - er, at - tend - eth my way," },
            { chords: "Eb          Ab          Eb           Bb", lyrics: "When sor - rows like sea bil - lows roll;" },
            { chords: "Ab          Bb          Eb           Cm", lyrics: "What - ev - er my lot, Thou hast taught me to say," },
            { chords: "Ab          Bb          Eb", lyrics: "It is well, it is well, with my soul." },
            { chords: "", lyrics: "" },
            { chords: "Eb          Ab          Eb           Bb", lyrics: "It is well, with my soul," },
            { chords: "Eb          Ab          Eb           Bb", lyrics: "It is well, it is well, with my soul." },
            { chords: "Ab          Bb          Eb           Cm", lyrics: "It is well, with my soul," },
            { chords: "Ab          Bb          Eb", lyrics: "It is well, it is well, with my soul." }
        ]
    },
    {
        id: 7,
        title: "The Old Rugged Cross",
        page: 7,
        author: "George Bennard",
        preview: "On a hill far away stood an old rugged cross, the emblem of suffering and shame...",
        content: [
            { chords: "G           C           G            D", lyrics: "On a hill far a - way stood an old rug - ged cross," },
            { chords: "G           C           G            D", lyrics: "The em - blem of suf - f'ring and shame;" },
            { chords: "C           D           G            Em", lyrics: "And I love that old cross where the dear - est and best" },
            { chords: "C           D           G", lyrics: "For a world of lost sin - ners was slain." },
            { chords: "", lyrics: "" },
            { chords: "G           C           G            D", lyrics: "So I'll cher - ish the old rug - ged cross," },
            { chords: "G           C           G            D", lyrics: "Till my tro - phies at last I lay down;" },
            { chords: "C           D           G            Em", lyrics: "I will cling to the old rug - ged cross," },
            { chords: "C           D           G", lyrics: "And ex - change it some day for a crown." }
        ]
    },
    {
        id: 8,
        title: "Blessed Assurance",
        page: 8,
        author: "Fanny J. Crosby",
        preview: "Blessed assurance, Jesus is mine! Oh, what a foretaste of glory divine...",
        content: [
            { chords: "F           C           F            C", lyrics: "Blessed as - sur - ance, Je - sus is mine!" },
            { chords: "F           C           F            C", lyrics: "Oh, what a fore - taste of glo - ry di - vine!" },
            { chords: "Bb          C           F            Dm", lyrics: "Heir of sal - va - tion, pur - chase of God," },
            { chords: "Bb          C           F", lyrics: "Born of His Spir - it, washed in His blood." },
            { chords: "", lyrics: "" },
            { chords: "F           C           F            C", lyrics: "This is my sto - ry, this is my song," },
            { chords: "F           C           F            C", lyrics: "Prais - ing my Sav - ior all the day long;" },
            { chords: "Bb          C           F            Dm", lyrics: "This is my sto - ry, this is my song," },
            { chords: "Bb          C           F", lyrics: "Prais - ing my Sav - ior all the day long." }
        ]
    },
    {
        id: 9,
        title: "Come Thou Fount",
        page: 9,
        author: "Robert Robinson",
        preview: "Come, Thou fount of every blessing, tune my heart to sing Thy grace...",
        content: [
            { chords: "G           C           G            D", lyrics: "Come, Thou Fount of ev - 'ry bless - ing," },
            { chords: "G           C           G            D", lyrics: "Tune my heart to sing Thy grace;" },
            { chords: "C           D           G            Em", lyrics: "Streams of mer - cy, nev - er ceas - ing," },
            { chords: "C           D           G", lyrics: "Call for songs of loud - est praise." },
            { chords: "", lyrics: "" },
            { chords: "G           C           G            D", lyrics: "Teach me some me - lod - ious son - net," },
            { chords: "G           C           G            D", lyrics: "Sung by flam - ing tongues a - bove;" },
            { chords: "C           D           G            Em", lyrics: "Praise the mount! I'm fixed up - on it," },
            { chords: "C           D           G", lyrics: "Mount of Thy re - deem - ing love." }
        ]
    },
    {
        id: 10,
        title: "Rock of Ages",
        page: 10,
        author: "Augustus M. Toplady",
        preview: "Rock of Ages, cleft for me, let me hide myself in Thee...",
        content: [
            { chords: "C           F           C            G", lyrics: "Rock of A - ges, cleft for me," },
            { chords: "C           F           C            G", lyrics: "Let me hide my - self in Thee;" },
            { chords: "F           G           C            Am", lyrics: "Let the wa - ter and the blood," },
            { chords: "F           G           C", lyrics: "From Thy wound - ed side which flowed," },
            { chords: "F           G           C            Am", lyrics: "Be of sin the dou - ble cure;" },
            { chords: "F           G           C", lyrics: "Save from wrath and make me pure." },
            { chords: "", lyrics: "" },
            { chords: "C           F           C            G", lyrics: "Noth - ing in my hand I bring," },
            { chords: "C           F           C            G", lyrics: "Sim - ply to the cross I cling;" },
            { chords: "F           G           C            Am", lyrics: "Na - ked, come to Thee for dress;" },
            { chords: "F           G           C", lyrics: "Help - less, look to Thee for grace;" },
            { chords: "F           G           C            Am", lyrics: "Foul, I to the foun - tain fly;" },
            { chords: "F           G           C", lyrics: "Wash me, Sav - ior, or I die." }
        ]
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const songGrid = document.getElementById('songGrid');
const noResults = document.getElementById('noResults');
const songListView = document.getElementById('songListView');
const songDetailView = document.getElementById('songDetailView');
const songArticle = document.getElementById('songArticle');
const backBtn = document.getElementById('backBtn');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    displayAllSongs(songs);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search button click
    searchBtn.addEventListener('click', handleSearch);
    
    // Enter key in search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Back button click
    backBtn.addEventListener('click', showSongList);
    
    // Real-time search as user types
    searchInput.addEventListener('input', handleSearch);
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const searchType = document.querySelector('input[name="searchType"]:checked').value;
    
    if (!searchTerm) {
        displayAllSongs(songs);
        return;
    }
    
    let filteredSongs = songs.filter(song => {
        switch (searchType) {
            case 'title':
                return song.title.toLowerCase().includes(searchTerm);
            case 'page':
                return song.page.toString() === searchTerm;
            case 'all':
            default:
                return song.title.toLowerCase().includes(searchTerm) || 
                       song.page.toString() === searchTerm;
        }
    });
    
    displayAllSongs(filteredSongs);
}

// Display all songs in the grid
function displayAllSongs(songsToDisplay) {
    songListView.style.display = 'block';
    songDetailView.style.display = 'none';
    
    if (songsToDisplay.length === 0) {
        songGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    songGrid.innerHTML = songsToDisplay.map(song => `
        <div class="song-card" onclick="showSongDetail(${song.id})" tabindex="0" role="button" aria-label="View ${song.title}">
            <div class="song-title">
                <span>${song.title}</span>
                <span class="page-number">Page ${song.page}</span>
            </div>
            <span class="song-author">${song.author}</span>
            <p class="song-preview">${song.preview}</p>
        </div>
    `).join('');
}

// Show song detail view
function showSongDetail(songId) {
    const song = songs.find(s => s.id === songId);
    if (!song) return;
    
    songListView.style.display = 'none';
    songDetailView.style.display = 'block';
    
    // Build the song content HTML
    let contentHTML = song.content.map(section => {
        if (section.chords && section.lyrics) {
            return `
                <div class="chord-lyric-block">
                    <div class="chord-line">${formatChords(section.chords)}</div>
                    <div class="lyric-line">${section.lyrics}</div>
                </div>
            `;
        } else if (section.lyrics) {
            return `
                <div class="lyric-line" style="margin-top: 10px;">${section.lyrics}</div>
            `;
        }
        return '';
    }).join('');
    
    songArticle.innerHTML = `
        <header class="song-header">
            <h2>${song.title}</h2>
            <div class="song-meta">
                <span>Page ${song.page}</span>
                <span>${song.author}</span>
            </div>
        </header>
        <div class="song-content">
            ${contentHTML}
        </div>
    `;
    
    // Scroll to top of detail view
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show song list view
function showSongList() {
    songListView.style.display = 'block';
    songDetailView.style.display = 'none';
    searchInput.value = '';
    displayAllSongs(songs);
}

// Format chords with proper spacing
function formatChords(chords) {
    // Split chords by multiple spaces and wrap each chord in a span
    const chordArray = chords.trim().split(/\s+/);
    return chordArray.map(chord => `<span>${chord}</span>`).join(' ');
}

// Add keyboard navigation support for song cards
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('song-card')) {
        const songId = parseInt(e.target.getAttribute('onclick').match(/\d+/)[0]);
        showSongDetail(songId);
    }
});

// Export songs data for potential future use (like adding more songs)
window.songsData = songs;

// Function to add new songs programmatically
window.addSong = function(song) {
    song.id = songs.length + 1;
    songs.push(song);
    displayAllSongs(songs);
    console.log(`Song "${song.title}" added successfully!`);
};

// Function to get all songs (useful for debugging)
window.getAllSongs = function() {
    return songs;
};