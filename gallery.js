/**
 * Premium Creative Portfolio Controller
 * For Ritik Vaishnav's gallery.html
 * Handles Tabs, Overlays, Deep-Linking, and Lightboxes
 */
document.addEventListener('DOMContentLoaded', () => {
  // === PROJECT DATA DEFINITIONS ===
  const movingProjects = [
    {
      id: 1,
      slug: "it-was-a-gift",
      title: "it was a gift",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "I3etrYojo5I",
      coverImage: "https://img.youtube.com/vi/I3etrYojo5I/maxresdefault.jpg",
      synopsis: "A poetic visual reflection, capturing the essence of simple gifts and the silent dialogues we hold with memories.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 2,
      slug: "we-shot-a-podcast-on-a-chai-ki-thadi",
      title: "we shot a podcast on a chai ki thadi",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "80dH7OdgBD0",
      coverImage: "https://img.youtube.com/vi/80dH7OdgBD0/maxresdefault.jpg",
      synopsis: "A raw, candid conversation recorded in the warm light of a local roadside tea stall, celebrating the beauty of simple talks and slow life.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 3,
      slug: "the-dream-wall",
      title: "The Dream Wall",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Writer",
      youtubeId: "sp6-W1MVi4I",
      coverImage: "https://img.youtube.com/vi/sp6-W1MVi4I/maxresdefault.jpg",
      synopsis: "An introspective, poetic visual study exploring personal boundaries, dreams, and the silent dialogues we hold with time and space.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Writer": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 4,
      slug: "pointless-podcast-with-friend",
      title: "I made the pointless podcast ever with my friend",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "G3WJduY2p3E",
      coverImage: "https://img.youtube.com/vi/G3WJduY2p3E/maxresdefault.jpg",
      synopsis: "A lighthearted, completely unstructured conversational recording between friends, capturing spontaneous humor and authentic connections.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 5,
      slug: "happiness-is-homemade",
      title: "Happiness is Homemade",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "dUrw0owD8dE",
      coverImage: "https://img.youtube.com/vi/dUrw0owD8dE/maxresdefault.jpg",
      synopsis: "A quiet, documentary-style exploration of fleeting everyday moments that bring raw, uncalculated joy to our lives, celebrating simple beauty.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav",
        "Colorist": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 6,
      slug: "turning-the-pages-of-time",
      title: "Turning the Pages of Time",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "M8X9TDPrk6Y",
      coverImage: "https://img.youtube.com/vi/M8X9TDPrk6Y/maxresdefault.jpg",
      synopsis: "A poetic film reflecting on memory, family archives, and the creative attempts we make to freeze time through camera frames.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav",
        "Sound Design": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 7,
      slug: "i-learnt-malayalam-in-a-gujarati-wedding",
      title: "I Learnt Malayalam in a Gujarati Wedding",
      type: "PERSONAL PROJECT",
      year: "2023",
      role: "Filmmaker & Editor",
      youtubeId: "r8u6UTgXb2o",
      coverImage: "https://img.youtube.com/vi/r8u6UTgXb2o/maxresdefault.jpg",
      synopsis: "A lighthearted, cross-cultural vlog documentary capturing travel, languages, and festive wedding customs across different regional boundaries.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav",
        "Host": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 8,
      slug: "life-moves-pretty-fast",
      title: "Life Moves Pretty Fast",
      type: "PERSONAL PROJECT",
      year: "2023",
      role: "Filmmaker & Editor",
      youtubeId: "cOUZHEI9sro",
      coverImage: "https://img.youtube.com/vi/cOUZHEI9sro/maxresdefault.jpg",
      synopsis: "A dynamic, high-spirited collage of travel memories, served as an aesthetic reminder to stop, look around, and enjoy the brief ride of life.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 9,
      slug: "60-days-of-summer",
      title: "60 Days of Summer",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "W8uHIIf0K5I",
      coverImage: "https://img.youtube.com/vi/W8uHIIf0K5I/maxresdefault.jpg",
      synopsis: "A warm, nostalgic visual diary capturing summer days, slow travel, and the comforting stillness of vast natural landscapes.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav",
        "Music Selection": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 10,
      slug: "postcards-from-jodhpur",
      title: "Postcards from Jodhpur",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "LbI9s6L0kJc",
      coverImage: "https://img.youtube.com/vi/LbI9s6L0kJc/maxresdefault.jpg",
      synopsis: "A visual postcard and cinematic travel diary capturing the blue city of Jodhpur, its streets, architecture, and nostalgic essence.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 11,
      slug: "portrait-of-time",
      title: "Portrait of Time",
      type: "SHORT FILM",
      year: "2024",
      role: "Director & Editor",
      youtubeId: "PMgCi_lxUdg",
      coverImage: "https://img.youtube.com/vi/PMgCi_lxUdg/maxresdefault.jpg",
      synopsis: "A poetic study of portraits frozen in time, capturing faces, spaces, and the silent, inevitable passage of time in everyday lives.",
      credits: {
        "Director": "Ritik Vaishnav",
        "DoP": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 12,
      slug: "shukragyzar",
      title: "Shukragyzar",
      type: "SHORT FILM",
      year: "2023",
      role: "Director & Editor",
      youtubeId: "v_Mun6H6kK0",
      coverImage: "https://img.youtube.com/vi/v_Mun6H6kK0/maxresdefault.jpg",
      synopsis: "An intense visual short film conceived, shot, and finalized within a tight time limit, exploring gratitude and reflection in a dark, atmospheric palette.",
      credits: {
        "Director": "Ritik Vaishnav",
        "Cinematography": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      scenes: []
    },
    {
      id: 13,
      slug: "yaadon-ka-aranya-pixellens-farewell",
      title: "यादों का अरण्य | पिक्स लेंस परिवार (Yaadon Ka Aranya)",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "5_ugCrUaM0s",
      coverImage: "https://img.youtube.com/vi/5_ugCrUaM0s/maxresdefault.jpg",
      synopsis: "A nostalgic and emotional farewell film created for the Pixellens MBM Jodhpur family, compiling years of memories, laughter, and behind-the-scenes moments.",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav",
        "Family": "Pixellens MBM"
      },
      scenes: []
    }
  ];
  const stillPhotos = [];
  // Add active page tag to body
  document.body.classList.add('creative-gallery-active');
  // === DOM ELEMENTS ===
  const switcherMoving = document.getElementById('switch-moving');
  const switcherStills = document.getElementById('switch-stills');
  const movingPanel = document.getElementById('moving-panel');
  const stillsPanel = document.getElementById('stills-panel');
  const movingContainer = document.getElementById('moving-container');
  const stillsContainer = document.getElementById('stills-container');
  // Details Overlay drawer elements
  const detailsOverlay = document.getElementById('details-overlay');
  const detailsCloseBtn = document.getElementById('details-close-btn');
  const detailsCover = document.getElementById('details-cover');
  const detailsCoverImg = document.getElementById('details-cover-img');
  const detailsPlayBtn = document.getElementById('details-play-btn');
  const detailsMeta = document.getElementById('details-meta');
  const detailsTitle = document.getElementById('details-title');
  const detailsSynopsis = document.getElementById('details-synopsis');
  const detailsCreditsList = document.getElementById('details-credits-list');
  const detailsScenesGallery = document.getElementById('details-scenes-gallery');
  const detailsPrevLink = document.getElementById('details-prev-link');
  const detailsNextLink = document.getElementById('details-next-link');
  // Video player lightbox modal elements (specifically for playing videos)
  const lightbox = document.getElementById('lightbox');
  const lightboxIframe = document.getElementById('lightbox-iframe');
  const lightboxClose = document.getElementById('lightbox-close');
  // Stills Lightbox modal elements (specifically for photos)
  const stillsLightbox = document.getElementById('stills-lightbox');
  const stillsLightboxImg = document.getElementById('stills-lightbox-img');
  const stillsLightboxClose = document.getElementById('stills-lightbox-close');
  const stillsLightboxPrev = document.getElementById('stills-lightbox-prev');
  const stillsLightboxNext = document.getElementById('stills-lightbox-next');
  const stillsLightboxIndex = document.getElementById('stills-lightbox-index');
  // === STATE VARIABLES ===
  let currentActiveTab = 'moving'; // 'moving' or 'stills'
  let currentOverlayProject = null;
  let currentLightboxPhotoIndex = 0;
  // === 1. POPULATE INITIAL VIEWS ---
  function renderMovingList() {
    if (!movingContainer) return;
    movingContainer.innerHTML = '';
    
    movingProjects.forEach((proj) => {
      const card = document.createElement('div');
      card.className = 'moving-card fade-up-animation';
      card.setAttribute('data-slug', proj.slug);
      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${proj.coverImage}" alt="${proj.title}" loading="lazy">
        </div>
        <div class="card-vignette-overlay"></div>
        <div class="card-info-content">
          <span class="card-metadata">${proj.type} • ${proj.year}</span>
          <h2 class="card-title">${proj.title}</h2>
        </div>
      `;
      
      card.addEventListener('click', () => {
        openProjectDetails(proj.slug);
      });
      
      movingContainer.appendChild(card);
    });
  }
  function renderStillsGrid() {
    if (!stillsContainer) return;
    stillsContainer.innerHTML = '';
    
    stillPhotos.forEach((imgSrc, index) => {
      const card = document.createElement('div');
      card.className = 'still-card fade-up-animation';
      card.innerHTML = `
        <img src="${imgSrc}" alt="Cinematic Nature Photograph ${index + 1}" loading="lazy">
        <div class="still-hover-overlay">
          <div class="still-view-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>
      `;
      
      card.addEventListener('click', () => {
        openStillsLightbox(index);
      });
      
      stillsContainer.appendChild(card);
    });
  }
  renderMovingList();
  renderStillsGrid();
  // === 2. TAB SWITCHER FUNCTIONALITY ===
  function setTab(tabName) {
    if (tabName === currentActiveTab) return;
    
    currentActiveTab = tabName;
    
    if (tabName === 'moving') {
      switcherMoving.classList.add('active');
      switcherStills.classList.remove('active');
      
      stillsPanel.classList.remove('active-panel');
      setTimeout(() => {
        stillsPanel.style.display = 'none';
        movingPanel.style.display = 'block';
        setTimeout(() => {
          movingPanel.classList.add('active-panel');
        }, 50);
      }, 300);
    } else {
      switcherStills.classList.add('active');
      switcherMoving.classList.remove('active');
      
      movingPanel.classList.remove('active-panel');
      setTimeout(() => {
        movingPanel.style.display = 'none';
        stillsPanel.style.display = 'block';
        setTimeout(() => {
          stillsPanel.classList.add('active-panel');
        }, 50);
      }, 300);
    }
  }
  if (switcherMoving) {
    switcherMoving.addEventListener('click', () => setTab('moving'));
  }
  if (switcherStills) {
    switcherStills.addEventListener('click', () => setTab('stills'));
  }
  // Setup click listeners for video player play trigger in details overlay
  if (detailsPlayBtn) {
    detailsPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentOverlayProject && currentOverlayProject.youtubeId) {
        openVideoPlayer(currentOverlayProject.youtubeId);
      }
    });
  }
  if (detailsCover) {
    detailsCover.addEventListener('click', () => {
      if (currentOverlayProject && currentOverlayProject.youtubeId) {
        openVideoPlayer(currentOverlayProject.youtubeId);
      }
    });
  }
  // === 3. PROJECT DETAIL OVERLAY DRAWER ===
  function openProjectDetails(slug, updateHash = true) {
    const proj = movingProjects.find(p => p.slug === slug);
    if (!proj) return;
    
    currentOverlayProject = proj;
    
    // Set Title, Meta, and Synopsis
    detailsTitle.innerText = proj.title;
    detailsMeta.innerText = `${proj.type} • ${proj.year}`;
    detailsSynopsis.innerText = proj.synopsis;
    
    // Set Cover Image
    detailsCoverImg.src = proj.coverImage;
    detailsCoverImg.alt = `${proj.title} Cover`;
    
    // Setup Play video click trigger on cover or button
    if (proj.youtubeId) {
      detailsCover.classList.add('video-playable');
      detailsPlayBtn.style.display = 'flex';
    } else {
      detailsCover.classList.remove('video-playable');
      detailsPlayBtn.style.display = 'none';
    }
    
    // Set Credits
    detailsCreditsList.innerHTML = '';
    const entries = Object.entries(proj.credits);
    entries.forEach(([role, val]) => {
      const row = document.createElement('div');
      row.className = 'credit-row';
      row.innerHTML = `
        <span class="credit-label">${role}</span>
        <span class="credit-value">${val}</span>
      `;
      detailsCreditsList.appendChild(row);
    });
    
    // Set Scenes
    detailsScenesGallery.innerHTML = '';
    // Group scenes in pairs or single wide screens
    for (let i = 0; i < proj.scenes.length; i += 2) {
      const row = document.createElement('div');
      
      if (i + 1 < proj.scenes.length) {
        // Double column row
        row.className = 'scene-row double-col';
        row.innerHTML = `
          <div class="scene-wrapper">
            <img src="${proj.scenes[i]}" alt="Film scene from ${proj.title}" loading="lazy">
          </div>
          <div class="scene-wrapper">
            <img src="${proj.scenes[i + 1]}" alt="Film scene from ${proj.title}" loading="lazy">
          </div>
        `;
      } else {
        // Single column wide row
        row.className = 'scene-row';
        row.innerHTML = `
          <div class="scene-wrapper">
            <img src="${proj.scenes[i]}" alt="Film scene from ${proj.title}" loading="lazy">
          </div>
        `;
      }
      detailsScenesGallery.appendChild(row);
    }
    
    // Setup Navigation link clicks
    const currentIndex = movingProjects.findIndex(p => p.slug === slug);
    const prevProj = movingProjects[(currentIndex - 1 + movingProjects.length) % movingProjects.length];
    const nextProj = movingProjects[(currentIndex + 1) % movingProjects.length];
    
    detailsPrevLink.innerText = `Previous: ${prevProj.title}`;
    detailsPrevLink.onclick = () => openProjectDetails(prevProj.slug);
    
    detailsNextLink.innerText = `Next: ${nextProj.title}`;
    detailsNextLink.onclick = () => openProjectDetails(nextProj.slug);
    
    // Open the drawer
    detailsOverlay.classList.add('open-overlay');
    document.body.style.overflow = 'hidden';
    
    // Update hash router
    if (updateHash) {
      window.location.hash = `#project-${slug}`;
    }
    
    // Scroll details container to top
    detailsOverlay.scrollTop = 0;
  }
  function closeProjectDetails() {
    detailsOverlay.classList.remove('open-overlay');
    document.body.style.overflow = '';
    currentOverlayProject = null;
    
    // Reset URL Hash
    if (window.location.hash.startsWith('#project-')) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }
  if (detailsCloseBtn) {
    detailsCloseBtn.addEventListener('click', closeProjectDetails);
  }
  // === 4. HASH DEEP LINKING ROUTER ===
  function handleHashRoute() {
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const slug = hash.replace('#project-', '');
      openProjectDetails(slug, false);
      setTab('moving');
    } else {
      closeProjectDetails();
    }
  }
  window.addEventListener('hashchange', handleHashRoute);
  // Trigger on initial page load
  if (window.location.hash) {
    setTimeout(handleHashRoute, 200);
  }
  // === 5. VIDEO IFRAME POPUP PLAYER ===
  function openVideoPlayer(youtubeId) {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  }
  function closeVideoPlayer() {
    if (lightbox && lightboxIframe) {
      lightbox.classList.remove('open');
      lightboxIframe.src = '';
      
      // If we closed the video and details overlay is open, keep body scrolling disabled
      if (currentOverlayProject) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeVideoPlayer);
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeVideoPlayer();
    });
  }
  // === 6. STILLS LIGHTBOX MODAL ===
  function openStillsLightbox(index) {
    currentLightboxPhotoIndex = index;
    updateStillsLightboxImage();
    stillsLightbox.classList.add('open-lightbox');
    document.body.style.overflow = 'hidden';
  }
  function updateStillsLightboxImage() {
    const imgSrc = stillPhotos[currentLightboxPhotoIndex];
    stillsLightboxImg.src = imgSrc;
    stillsLightboxImg.alt = `Still photograph ${currentLightboxPhotoIndex + 1}`;
    stillsLightboxIndex.innerText = `${currentLightboxPhotoIndex + 1} / ${stillPhotos.length}`;
  }
  function closeStillsLightbox() {
    stillsLightbox.classList.remove('open-lightbox');
    document.body.style.overflow = '';
  }
  function navigateStillsLightbox(direction) {
    if (direction === 'prev') {
      currentLightboxPhotoIndex = (currentLightboxPhotoIndex - 1 + stillPhotos.length) % stillPhotos.length;
    } else {
      currentLightboxPhotoIndex = (currentLightboxPhotoIndex + 1) % stillPhotos.length;
    }
    updateStillsLightboxImage();
  }
  if (stillsLightboxClose) {
    stillsLightboxClose.addEventListener('click', closeStillsLightbox);
  }
  if (stillsLightboxPrev) {
    stillsLightboxPrev.addEventListener('click', () => navigateStillsLightbox('prev'));
  }
  if (stillsLightboxNext) {
    stillsLightboxNext.addEventListener('click', () => navigateStillsLightbox('next'));
  }
  if (stillsLightbox) {
    stillsLightbox.addEventListener('click', (e) => {
      if (e.target === stillsLightbox || e.target.classList.contains('lightbox-img-wrapper')) {
        closeStillsLightbox();
      }
    });
  }
  // === 7. KEYBOARD SUPPORT ===
  document.addEventListener('keydown', (e) => {
    // Escape key
    if (e.key === 'Escape') {
      if (lightbox && lightbox.classList.contains('open')) {
        closeVideoPlayer();
      } else if (stillsLightbox && stillsLightbox.classList.contains('open-lightbox')) {
        closeStillsLightbox();
      } else if (currentOverlayProject) {
        closeProjectDetails();
      }
    }
    
    // Left/Right arrows for stills gallery
    if (stillsLightbox && stillsLightbox.classList.contains('open-lightbox')) {
      if (e.key === 'ArrowLeft') {
        navigateStillsLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        navigateStillsLightbox('next');
      }
    }
  });
});