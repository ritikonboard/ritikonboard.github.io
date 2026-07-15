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
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "personal",
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
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "personal",
      scenes: []
    },
    {
      id: 3,
      slug: "the-dream-wall",
      title: "I built a dream wall to make them come true",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Writer",
      youtubeId: "sp6-W1MVi4I",
      coverImage: "https://img.youtube.com/vi/sp6-W1MVi4I/maxresdefault.jpg",
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Writer": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "personal",
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
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "personal",
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
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav",
        "Colorist": "Ritik Vaishnav"
      },
      category: "personal",
      scenes: []
    },
    {
      id: 6,
      slug: "turning-the-pages-of-time",
      title: "turning the pages back",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "M8X9TDPrk6Y",
      coverImage: "https://img.youtube.com/vi/M8X9TDPrk6Y/maxresdefault.jpg",
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav",
        "Sound Design": "Ritik Vaishnav"
      },
      category: "personal",
      scenes: []
    },
    {
      id: 7,
      slug: "i-learnt-malayalam-in-a-gujarati-wedding",
      title: "I learnt malayalam in a gujarati wedding",
      type: "PERSONAL PROJECT",
      year: "2023",
      role: "Filmmaker & Editor",
      youtubeId: "r8u6UTgXb2o",
      coverImage: "https://img.youtube.com/vi/r8u6UTgXb2o/maxresdefault.jpg",
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav",
        "Host": "Ritik Vaishnav"
      },
      category: "personal",
      scenes: []
    },
    {
      id: 8,
      slug: "life-moves-pretty-fast",
      title: "life moves pretty fast",
      type: "PERSONAL PROJECT",
      year: "2023",
      role: "Filmmaker & Editor",
      youtubeId: "cOUZHEI9sro",
      coverImage: "https://img.youtube.com/vi/cOUZHEI9sro/maxresdefault.jpg",
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "personal",
      scenes: []
    },
    {
      id: 9,
      slug: "60-days-of-summer",
      title: "what a guy can do in 60 days of summer",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "W8uHIIf0K5I",
      coverImage: "https://img.youtube.com/vi/W8uHIIf0K5I/maxresdefault.jpg",
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav",
        "Music Selection": "Ritik Vaishnav"
      },
      category: "personal",
      scenes: []
    },
    {
      id: 10,
      slug: "postcards-from-jodhpur",
      title: "postcards from jodhpur",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "LbI9s6L0kJc",
      coverImage: "https://img.youtube.com/vi/LbI9s6L0kJc/maxresdefault.jpg",
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "personal",
      scenes: []
    },
    {
      id: 11,
      slug: "portrait-of-time",
      title: "Portrait of a Time | Short Film | 50Hr IFP Filmmaking Challenge 2024 | Pixellens",
      type: "SHORT FILM",
      year: "2024",
      role: "Director & Editor",
      youtubeId: "PMgCi_lxUdg",
      coverImage: "https://img.youtube.com/vi/PMgCi_lxUdg/maxresdefault.jpg",
      synopsis: "",
      credits: {
        "Director": "Ritik Vaishnav",
        "DoP": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "personal",
      scenes: []
    },
    {
      id: 12,
      slug: "shukragyzar",
      title: "Shukraguzar | Short Film | 51 Hr Filmmaking",
      type: "SHORT FILM",
      year: "2023",
      role: "Director & Editor",
      youtubeId: "v_Mun6H6kK0",
      coverImage: "https://img.youtube.com/vi/v_Mun6H6kK0/maxresdefault.jpg",
      synopsis: "",
      credits: {
        "Director": "Ritik Vaishnav",
        "Cinematography": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "personal",
      scenes: []
    },
    {
      id: 13,
      slug: "yaadon-ka-aranya-pixellens-farewell",
      title: "यादों का अरण्य | पिक्स लेंस परिवार",
      type: "PERSONAL PROJECT",
      year: "2024",
      role: "Filmmaker & Editor",
      youtubeId: "5_ugCrUaM0s",
      coverImage: "https://img.youtube.com/vi/5_ugCrUaM0s/maxresdefault.jpg",
      synopsis: "",
      credits: {
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav",
        "Family": "Pixellens MBM"
      },
      category: "personal",
      scenes: []
    },
    {
      id: 14,
      slug: "park-plaza-cut-the-noise",
      title: "Park Plaza - Cut the Noise",
      type: "COMMERCIAL AD",
      year: "2025",
      role: "Director & Editor",
      videoPath: "assets/ADs (tried to be creative)/Park Plaza Ads/cut the noise.mp4",
      coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600",
      synopsis: "",
      credits: {
        "Client": "Park Plaza Hotels",
        "Director": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "commercial",
      scenes: []
    },
    {
      id: 15,
      slug: "park-plaza-diwali-ad",
      title: "Park Plaza - Diwali Special",
      type: "COMMERCIAL AD",
      year: "2025",
      role: "Director & Editor",
      videoPath: "assets/ADs (tried to be creative)/Park Plaza Ads/Diwali_ad.mp4",
      coverImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600",
      synopsis: "",
      credits: {
        "Client": "Park Plaza Hotels",
        "Director": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "commercial",
      scenes: []
    },
    {
      id: 16,
      slug: "influencer-outdoors-cinematic",
      title: "Outdoors Cinematic - Fashion Film",
      type: "FASHION FILM",
      year: "2024",
      role: "Filmmaker & Editor",
      videoPath: "assets/ADs (tried to be creative)/Influencer Creative/Outdoors.mp4",
      coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600",
      synopsis: "",
      credits: {
        "Influencer": "Creative Collaboration",
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "commercial",
      scenes: []
    },
    {
      id: 17,
      slug: "kalorie-count-reel-4",
      title: "Kalorie Count Cafe - Aesthetic Reel",
      type: "COMMERCIAL REEL",
      year: "2025",
      role: "Filmmaker & Editor",
      videoPath: "assets/ADs (tried to be creative)/Kalorie Count (Cafe)/KC Reel 4 Final.mp4",
      coverImage: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600",
      synopsis: "",
      credits: {
        "Client": "Kalorie Count Cafe",
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "commercial",
      scenes: []
    },
    {
      id: 18,
      slug: "kalorie-count-reel-7",
      title: "Kalorie Count Cafe - Signature Reel",
      type: "COMMERCIAL REEL",
      year: "2025",
      role: "Filmmaker & Editor",
      videoPath: "assets/ADs (tried to be creative)/Kalorie Count (Cafe)/KC Reel 7.mp4",
      coverImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600",
      synopsis: "",
      credits: {
        "Client": "Kalorie Count Cafe",
        "Filmmaker": "Ritik Vaishnav",
        "Editor": "Ritik Vaishnav"
      },
      category: "commercial",
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
  const lightboxVideo = document.getElementById('lightbox-video');
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
  function renderMovingList(filterCategory = 'all') {
    if (!movingContainer) return;
    movingContainer.innerHTML = '';
    
    // Remove commercial grid class by default
    movingContainer.classList.remove('commercial-grid');
    
    if (filterCategory === 'personal') {
      const personalProjects = movingProjects.filter(p => p.category === 'personal');
      renderPersonalFilms(personalProjects);
    } else if (filterCategory === 'commercial') {
      movingContainer.classList.add('commercial-grid');
      const commercialProjects = movingProjects.filter(p => p.category === 'commercial');
      renderCommercialReels(commercialProjects);
    } else {
      // Render 'all' - personal stacked films first, then commercial reels in a grid!
      const personalProjects = movingProjects.filter(p => p.category === 'personal');
      const commercialProjects = movingProjects.filter(p => p.category === 'commercial');
      
      // Render personal films
      renderPersonalFilms(personalProjects);
      
      // Add section divider and heading for client work
      const sectionDivider = document.createElement('div');
      sectionDivider.className = 'commercial-section-divider fade-up-animation';
      sectionDivider.innerHTML = `
        <h2 class="commercial-section-title">Commercial & Client Work</h2>
      `;
      movingContainer.appendChild(sectionDivider);
      
      // Render commercial reels inside a nested grid container
      const nestedGrid = document.createElement('div');
      nestedGrid.className = 'moving-list-container commercial-grid';
      renderCommercialReels(commercialProjects, nestedGrid);
      movingContainer.appendChild(nestedGrid);
    }
  }

  function renderPersonalFilms(projects, container = movingContainer) {
    projects.forEach((proj) => {
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
      
      container.appendChild(card);
    });
  }

  function renderCommercialReels(projects, container = movingContainer) {
    projects.forEach((proj) => {
      const card = document.createElement('div');
      card.className = 'commercial-video-card fade-up-animation';
      card.innerHTML = `
        <div class="video-player-wrapper">
          <video src="${proj.videoPath}" controls preload="metadata" playsinline></video>
        </div>
        <div class="commercial-card-info">
          <span class="commercial-metadata">${proj.type} • ${proj.year}</span>
          <h3 class="commercial-title">${proj.title}</h3>
          <p class="commercial-client">${proj.credits.Client || proj.credits.Influencer || ''}</p>
        </div>
      `;
      container.appendChild(card);
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
  renderMovingList('all');
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
  
  // Setup click listeners for sub-filters (All / Personal / Commercial)
  const subFilterBtns = document.querySelectorAll('.sub-filter-btn');
  subFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      subFilterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      renderMovingList(filter);
    });
  });
  // Setup click listeners for video player play trigger in details overlay
  if (detailsPlayBtn) {
    detailsPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentOverlayProject) {
        if (currentOverlayProject.youtubeId) {
          openVideoPlayer(currentOverlayProject.youtubeId, null);
        } else if (currentOverlayProject.videoPath) {
          openVideoPlayer(null, currentOverlayProject.videoPath);
        }
      }
    });
  }
  if (detailsCover) {
    detailsCover.addEventListener('click', () => {
      if (currentOverlayProject) {
        if (currentOverlayProject.youtubeId) {
          openVideoPlayer(currentOverlayProject.youtubeId, null);
        } else if (currentOverlayProject.videoPath) {
          openVideoPlayer(null, currentOverlayProject.videoPath);
        }
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
    
    const creditsTable = document.querySelector('.details-credits-table');
    if (proj.synopsis) {
      detailsSynopsis.innerText = proj.synopsis;
      detailsSynopsis.style.display = 'block';
      if (creditsTable) {
        if (window.innerWidth >= 768) {
          creditsTable.style.gridTemplateColumns = '2fr 1fr';
        } else {
          creditsTable.style.gridTemplateColumns = '1fr';
        }
      }
    } else {
      detailsSynopsis.innerText = '';
      detailsSynopsis.style.display = 'none';
      if (creditsTable) {
        creditsTable.style.gridTemplateColumns = '1fr';
      }
    }
    
    // Set Cover Image
    detailsCoverImg.src = proj.coverImage;
    detailsCoverImg.alt = `${proj.title} Cover`;
    
    // Setup Play video click trigger on cover or button
    if (proj.youtubeId || proj.videoPath) {
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
  // === 5. VIDEO POPUP PLAYER ===
  function openVideoPlayer(youtubeId, videoPath) {
    if (youtubeId) {
      window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
    } else if (videoPath) {
      if (lightbox && lightboxVideo && lightboxIframe) {
        lightboxIframe.style.display = 'none';
        lightboxIframe.src = '';
        lightboxVideo.src = videoPath;
        lightboxVideo.style.display = 'block';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }
  }
  function closeVideoPlayer() {
    if (lightbox) {
      lightbox.classList.remove('open');
      if (lightboxIframe) {
        lightboxIframe.src = '';
        lightboxIframe.style.display = 'block';
      }
      if (lightboxVideo) {
        lightboxVideo.pause();
        lightboxVideo.src = '';
        lightboxVideo.style.display = 'none';
      }
      
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