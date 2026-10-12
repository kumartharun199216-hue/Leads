/**
 * APEX DENTAL & IMPLANT STUDIO — INTERACTIVE CLIENT PROTOTYPE LOGIC
 * Pure Vanilla JavaScript — High Performance, 0 External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MOCK DATASETS & CLINICAL DEFINITIONS
     ========================================================================== */

  const mockTreatments = [
    {
      id: "implant-single",
      name: "Precision Dental Implant",
      category: "implants",
      tagline: "Permanent tooth replacement using German Grade-V Titanium & 3D CBCT scan.",
      duration: "60 mins",
      startingPrice: 16999,
      emiStarting: 1499,
      stages: ["Digital Bone Scan & Stent", "Painless Fixture Placement", "Zirconia Crown Fixation"],
      badge: "Most Popular",
      docSpecialty: "Implantologist",
      protocolSteps: [
        { title: "Stage 1: 3D CBCT Scan & Virtual Planning", desc: "Computerized bone density mapping ensures 100% nerve safety and zero guesswork." },
        { title: "Stage 2: Keyhole Titanium Implant Placement", desc: "Minimally invasive keyhole surgery with local anesthesia. No stitches, no swelling." },
        { title: "Stage 3: Permanent Zirconia Crown Fitting", desc: "Custom digitally milled ceramic crown matched to the exact shade of your adjacent teeth." }
      ]
    },
    {
      id: "all-on-4",
      name: "All-on-4 Full Arch Implants",
      category: "implants",
      tagline: "Restore an entire arch of missing teeth in 48 hours with fixed permanent teeth.",
      duration: "90 mins",
      startingPrice: 125000,
      emiStarting: 7499,
      stages: ["Full Mouth 3D Scan", "4 Angled Titanium Fixtures", "Immediate Hybrid Bridge"],
      badge: "Surgical Master",
      docSpecialty: "Chief Implantologist",
      protocolSteps: [
        { title: "Stage 1: Complete Digital Smile Architecture", desc: "Facial contour analysis and digital bite alignment mapping." },
        { title: "Stage 2: Same-Day Computer-Guided Surgery", desc: "4 heavy-duty titanium fixtures strategically angled to avoid bone grafting." },
        { title: "Stage 3: Immediate Fixed Provisional Teeth", desc: "Walk out of the clinic chewing soft food within 24 to 48 hours." }
      ]
    },
    {
      id: "clear-aligners",
      name: "Invisible Clear Aligners",
      category: "cosmetic",
      tagline: "Straighten crooked teeth discreetly with removable medical-grade clear trays.",
      duration: "6-9 Months Plan",
      startingPrice: 42999,
      emiStarting: 2999,
      stages: ["3D iTero Intraoral Scan", "Custom Tray Sets Delivery", "Bi-Weekly Track Checks"],
      badge: "Zero Metal",
      docSpecialty: "Orthodontist",
      protocolSteps: [
        { title: "Stage 1: 5-Minute Intraoral 3D Scanning", desc: "No messy molds. Laser camera captures thousands of digital points of your teeth." },
        { title: "Stage 2: 3D Video Outcome Simulation", desc: "Inspect a simulation of how your teeth will move week-by-week before paying." },
        { title: "Stage 3: Delivery of Customized Aligner Trays", desc: "Switch to a new tray every 14 days in the comfort of your home." }
      ]
    },
    {
      id: "ceramic-veneers",
      name: "German Porcelain Veneers",
      category: "cosmetic",
      tagline: "Correct chipped, discolored, or gapped front teeth with ultra-thin ceramic shells.",
      duration: "2 Sittings",
      startingPrice: 8999,
      emiStarting: 999,
      stages: ["Smile Proportions Design", "Minimal Enamel Prep", "Permanent Resin Bonding"],
      badge: "Hollywood Smile",
      docSpecialty: "Cosmetic Dentist",
      protocolSteps: [
        { title: "Stage 1: Aesthetic Mockup & Shade Selection", desc: "Direct smile try-on to let you preview tooth shape, length, and shade." },
        { title: "Stage 2: Micro-Enamel Conditioning", desc: "Minimal 0.3mm preparation preserving 95% of your natural enamel." },
        { title: "Stage 3: High-Strength Adhesive Bonding", desc: "Bonded with light-cured composite resin for lifetime stain resistance." }
      ]
    },
    {
      id: "rct-laser",
      name: "Single-Sitting Laser Root Canal",
      category: "rct",
      tagline: "Eliminate severe toothache instantly with computerized rotary cleaning.",
      duration: "45 mins",
      startingPrice: 3299,
      emiStarting: null,
      stages: ["Painless Computerized Numbing", "Rotary Canal Sterilization", "Biocompatible Gutta Seal"],
      badge: "100% Painless",
      docSpecialty: "Endodontist",
      protocolSteps: [
        { title: "Stage 1: Computerized Local Anesthetic", desc: "Pain-free wand delivery ensures you feel zero pinch or discomfort." },
        { title: "Stage 2: Microscopic Rotary Cleaning", desc: "Rotary nickel-titanium files remove infected pulp in a single 45-minute sitting." },
        { title: "Stage 3: Hermetic Seal & Crown Prep", desc: "Sterile rubber seal prevents re-infection, ready for CAD/CAM crown placement." }
      ]
    },
    {
      id: "zirconia-crown",
      name: "Monolithic Zirconia Crown",
      category: "rct",
      tagline: "Unbreakable metal-free dental crown backed by a 15-year warranty certificate.",
      duration: "30 mins",
      startingPrice: 5499,
      emiStarting: null,
      stages: ["Optical Scan", "CAD/CAM Robot Milling", "Dual-Cure Cementation"],
      badge: "15-Yr Warranty",
      docSpecialty: "Prosthodontist",
      protocolSteps: [
        { title: "Stage 1: 3D Digital Impression", desc: "Eliminates rubber putty impressions with an accurate 3D optical scan." },
        { title: "Stage 2: Precision Robotic Milling", desc: "Carved from a solid block of translucent German medical zirconia." },
        { title: "Stage 3: Permanent Bite Cementation", desc: "Seamless fit with zero black borders along your gumline." }
      ]
    },
    {
      id: "laser-whitening",
      name: "In-Clinic Laser Teeth Whitening",
      category: "cosmetic",
      tagline: "Erase years of coffee, tea, and smoke stains in 45 minutes. Up to 8 shades lighter.",
      duration: "45 mins",
      startingPrice: 4499,
      emiStarting: null,
      stages: ["Protective Gum Barrier", "Medical Hydrogen Gel", "Cold Blue Laser Activation"],
      badge: "Instant Glow",
      docSpecialty: "Cosmetic Dentist",
      protocolSteps: [
        { title: "Stage 1: Polish & Gingival Barrier Application", desc: "Gums and lips are shielded to prevent any sensitivity or irritation." },
        { title: "Stage 2: Active Whitening Formula Application", desc: "pH-neutral hydrogen peroxide gel breaks deep enamel stain molecules." },
        { title: "Stage 3: Triple-Cycle Laser Activation", desc: "Three 15-minute bursts under cold laser light for an instantly dazzling smile." }
      ]
    },
    {
      id: "pediatric-care",
      name: "Kids Preventive Dental Care",
      category: "pediatric",
      tagline: "Fear-free dental visits for toddlers and children. Fluoride therapy & cavity seals.",
      duration: "30 mins",
      startingPrice: 1299,
      emiStarting: null,
      stages: ["Fun Clinic Orientation", "Gentle Plaque Removal", "Fruit-Flavored Fluoride Varnish"],
      badge: "Child Friendly",
      docSpecialty: "Pedodontist",
      protocolSteps: [
        { title: "Stage 1: Fear-Free Gentle Introduction", desc: "Children get familiarized with instruments in a cheerful, game-like environment." },
        { title: "Stage 2: Pit & Fissure Cavity Shielding", desc: "Liquid protective coating fills grooves in back molars to prevent childhood cavities." },
        { title: "Stage 3: Enamel Strengthening Varnish", desc: "Tasty fruit-flavored fluoride application keeps tooth enamel rock-hard against sugar." }
      ]
    }
  ];

  const mockDoctors = [
    {
      id: "doc-1",
      name: "Dr. Arvind Swaminathan, MDS",
      title: "Chief Implantologist & Oral Surgeon",
      experience: "14 Years Exp • AIIMS New Delhi",
      education: "MDS - Oral & Maxillofacial Surgery",
      rating: "4.95 (420 reviews)",
      availableDays: "Mon – Sat",
      status: "Available Today • Evening Shift",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
      specialtyId: "implant-single"
    },
    {
      id: "doc-2",
      name: "Dr. Sneha Reddy, MDS",
      title: "Senior Orthodontist & Aligner Specialist",
      experience: "11 Years Exp • Manipal University",
      education: "MDS - Orthodontics & Dentofacial Orthopedics",
      rating: "4.92 (380 reviews)",
      availableDays: "Mon, Tue, Thu, Fri",
      status: "Available Today • Chamber 2",
      avatar: "https://images.unsplash.com/photo-1594824813583-705886561266?auto=format&fit=crop&q=80&w=400",
      specialtyId: "clear-aligners"
    },
    {
      id: "doc-3",
      name: "Dr. Vikram Varma, MDS",
      title: "Consultant Endodontist (Root Canal Specialist)",
      experience: "9 Years Exp • RGUHS",
      education: "MDS - Conservative Dentistry & Endodontics",
      rating: "4.89 (310 reviews)",
      availableDays: "Daily (Mon – Sun)",
      status: "Available Today • Laser Suite",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      specialtyId: "rct-laser"
    },
    {
      id: "doc-4",
      name: "Dr. Kavitha Nair, BDS",
      title: "Pediatric & Cosmetic Dentist",
      experience: "8 Years Exp • Fellowship in Pedodontics",
      education: "BDS, Fellowship in Aesthetic Dentistry",
      rating: "4.96 (290 reviews)",
      availableDays: "Tue, Thu, Sat",
      status: "Available Tomorrow • Morning",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
      specialtyId: "pediatric-care"
    }
  ];

  const mockCases = {
    case1: {
      title: "Upper Arch Rehabilitation (Age 52)",
      protocol: "All-on-4 Titanium Implants with Zirconia Bridge",
      duration: "2 Surgical Visits • Lifetime Warranty",
      imgBefore: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900",
      imgAfter: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=900"
    },
    case2: {
      title: "Severe Crowding & Deep Overbite Correction",
      protocol: "Custom Invisible Clear Aligners (18 Trays)",
      duration: "7 Months Treatment Time",
      imgBefore: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=900",
      imgAfter: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=900"
    },
    case3: {
      title: "Severe Enamel Fluorosis & Diastema Closure",
      protocol: "8 Ultra-Thin German Porcelain Veneers",
      duration: "2 Appointments (4 Days Apart)",
      imgBefore: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900",
      imgAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=900"
    }
  };

  const mockFaqs = [
    {
      q: "Is single-sitting root canal treatment painful?",
      a: "Not at all. With our computerized painless local anesthesia and high-speed rotary laser instruments, the procedure feels no more intense than a standard dental cleaning. Over 98% of our patients report zero discomfort during or after the session."
    },
    {
      q: "How long do German titanium dental implants last?",
      a: "Dental implants fuse directly into your jawbone in a biological process called osseointegration. With regular brushing, flossing, and 6-month checkups, our implants are engineered to last a lifetime, supported by a 15-year clinic warranty certificate."
    },
    {
      q: "What is the difference between invisible aligners and metal braces?",
      a: "Clear aligners are completely transparent, removable when eating or brushing, and have no sharp metal wires to poke your cheeks. Treatment planning is done via 3D computer simulations, allowing you to see your final smile before starting."
    },
    {
      q: "Can I pay for dental procedures in monthly installments (EMI)?",
      a: "Yes! We offer 0% interest EMI options on all major treatments including Dental Implants, Clear Aligners, and Full Mouth Rehabilitation through leading digital healthcare finance partners. Instant approval takes under 5 minutes at our reception."
    },
    {
      q: "How does the online digital token work?",
      a: "When you reserve your slot online, our algorithm allocates a guaranteed token ID (e.g. #APX-8841) in our clinic OPD management system. You receive an instant WhatsApp confirmation. Arriving 5 minutes before your slot ensures you walk straight into the consultation chamber with zero waiting line."
    }
  ];

  /* ==========================================================================
     2. RENDER PROCEDURES & TREATMENT CARDS
     ========================================================================== */

  const treatmentsContainer = document.getElementById('treatments-grid-container');
  const filterButtons = document.querySelectorAll('.filter-pill');

  function renderTreatments(filter = 'all') {
    if (!treatmentsContainer) return;
    treatmentsContainer.innerHTML = '';

    const filtered = filter === 'all' 
      ? mockTreatments 
      : mockTreatments.filter(t => t.category === filter);

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'treatment-card';
      card.id = `treatment-card-${item.id}`;

      card.innerHTML = `
        <div class="treatment-card-top">
          <div class="treatment-badge-row">
            <span class="t-tag">${item.badge}</span>
            <span class="t-duration">⏱ ${item.duration}</span>
          </div>
          <h3 class="treatment-title">${item.name}</h3>
          <p class="treatment-desc">${item.tagline}</p>
          <div class="treatment-stages-chips">
            ${item.stages.map(s => `<span class="stage-chip">✓ ${s}</span>`).join('')}
          </div>
        </div>
        <div class="treatment-card-bottom">
          <div class="t-price-box">
            <span class="t-from">STARTING FROM</span>
            <span class="t-price">₹${item.startingPrice.toLocaleString('en-IN')}</span>
          </div>
          <div class="t-actions">
            <button class="btn btn-sm btn-ghost btn-view-protocol" data-id="${item.id}" id="btn-protocol-${item.id}">Protocol</button>
            <button class="btn btn-sm btn-primary-gradient btn-book-treatment" data-id="${item.id}" id="btn-book-treatment-${item.id}">Book Slot</button>
          </div>
        </div>
      `;

      treatmentsContainer.appendChild(card);
    });

    // Attach listeners
    document.querySelectorAll('.btn-view-protocol').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openProtocolModal(id);
      });
    });

    document.querySelectorAll('.btn-book-treatment').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        startBookingWithTreatment(id);
      });
    });
  }

  // Filter click handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTreatments(btn.getAttribute('data-category'));
    });
  });

  renderTreatments('all');

  /* ==========================================================================
     3. RENDER DOCTOR CARDS
     ========================================================================== */

  const doctorsContainer = document.getElementById('doctors-grid-container');

  function renderDoctors() {
    if (!doctorsContainer) return;
    doctorsContainer.innerHTML = '';

    mockDoctors.forEach((doc, idx) => {
      const card = document.createElement('div');
      card.className = 'doctor-card';
      card.id = `doctor-card-${doc.id}`;

      card.innerHTML = `
        <div class="doctor-media">
          <img src="${doc.avatar}" alt="${doc.name}" class="doctor-img">
          <div class="doctor-exp-badge">${doc.experience.split('•')[0]}</div>
        </div>
        <div class="doctor-body">
          <div>
            <h3 class="doctor-name">${doc.name}</h3>
            <span class="doctor-specialty">${doc.title}</span>
            <p class="doctor-edu">${doc.education}</p>
            <div class="doctor-rating-strip">
              <span class="stars">★★★★★</span>
              <strong>${doc.rating}</strong>
            </div>
            <span class="doctor-available-badge">● ${doc.status}</span>
          </div>
          <button class="btn btn-primary-gradient w-full btn-book-doctor" data-id="${doc.id}" id="btn-book-doctor-${doc.id}">
            Book With ${doc.name.split(' ')[1]}
          </button>
        </div>
      `;

      doctorsContainer.appendChild(card);
    });

    document.querySelectorAll('.btn-book-doctor').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const docId = e.currentTarget.getAttribute('data-id');
        startBookingWithDoctor(docId);
      });
    });
  }

  renderDoctors();

  /* ==========================================================================
     4. BEFORE & AFTER SMILE COMPARISON SLIDER
     ========================================================================== */

  const slider = document.getElementById('comparison-slider');
  const sliderHandle = document.getElementById('slider-handle');
  const sliderAfterImgContainer = document.getElementById('slider-after-container');
  const sliderImgBefore = document.getElementById('slider-img-before');
  const sliderImgAfter = document.getElementById('slider-img-after');

  const caseTitle = document.getElementById('case-meta-title');
  const caseProtocol = document.getElementById('case-meta-protocol');
  const caseDuration = document.getElementById('case-meta-duration');
  const caseTabs = document.querySelectorAll('.case-tab');

  let isDraggingSlider = false;

  function setCase(caseKey) {
    const data = mockCases[caseKey];
    if (!data) return;

    sliderImgBefore.src = data.imgBefore;
    sliderImgAfter.src = data.imgAfter;
    caseTitle.textContent = data.title;
    caseProtocol.textContent = data.protocol;
    caseDuration.textContent = data.duration;

    // Reset slider to 50%
    setSliderPosition(50);
  }

  function setSliderPosition(percentage) {
    const clamped = Math.max(0, Math.min(100, percentage));
    sliderHandle.style.left = `${clamped}%`;
    sliderAfterImgContainer.style.clipPath = `inset(0 0 0 ${clamped}%)`;
  }

  function handleSliderMove(e) {
    if (!isDraggingSlider || !slider) return;
    const rect = slider.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    const percentage = (offsetX / rect.width) * 100;
    setSliderPosition(percentage);
  }

  if (slider) {
    slider.addEventListener('mousedown', () => isDraggingSlider = true);
    window.addEventListener('mouseup', () => isDraggingSlider = false);
    window.addEventListener('mousemove', handleSliderMove);

    slider.addEventListener('touchstart', () => isDraggingSlider = true);
    window.addEventListener('touchend', () => isDraggingSlider = false);
    window.addEventListener('touchmove', handleSliderMove);
  }

  caseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      caseTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      setCase(tab.getAttribute('data-case'));
    });
  });

  // Default case
  setCase('case1');

  /* ==========================================================================
     5. 4-STEP INTERACTIVE BOOKING ENGINE LOGIC
     ========================================================================== */

  const bookingState = {
    selectedTreatment: mockTreatments[0],
    selectedDoctor: mockDoctors[0],
    selectedDate: null,
    selectedShift: 'evening',
    selectedSlot: '05:15 PM',
    patientName: '',
    patientPhone: '',
    generatedToken: null
  };

  const procGrid = document.getElementById('booking-procedure-grid');
  const docGrid = document.getElementById('booking-doctor-grid');
  const dateScrollRow = document.getElementById('date-scroll-row');
  const slotsContainer = document.getElementById('slots-chips-container');

  const shiftMorningBtn = document.getElementById('btn-shift-morning');
  const shiftEveningBtn = document.getElementById('btn-shift-evening');

  const nextStep1Btn = document.getElementById('btn-next-step-1');
  const nextStep2Btn = document.getElementById('btn-next-step-2');
  const nextStep3Btn = document.getElementById('btn-next-step-3');

  const backStep2Btn = document.getElementById('btn-back-step-2');
  const backStep3Btn = document.getElementById('btn-back-step-3');
  const backStep4Btn = document.getElementById('btn-back-step-4');

  const patientForm = document.getElementById('patient-booking-form');

  // Populate Step 1: Procedures
  function populateStep1() {
    if (!procGrid) return;
    procGrid.innerHTML = '';

    mockTreatments.forEach(item => {
      const card = document.createElement('div');
      card.className = `proc-radio-card ${item.id === bookingState.selectedTreatment.id ? 'selected' : ''}`;
      card.id = `proc-opt-${item.id}`;
      card.innerHTML = `
        <div>
          <div class="proc-head-row">
            <span class="proc-title">${item.name}</span>
            <span class="proc-duration">⏱ ${item.duration}</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-muted);">${item.tagline.substring(0, 60)}...</p>
        </div>
        <div class="proc-price">From ₹${item.startingPrice.toLocaleString('en-IN')}</div>
      `;

      card.addEventListener('click', () => {
        document.querySelectorAll('.proc-radio-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        bookingState.selectedTreatment = item;
      });

      procGrid.appendChild(card);
    });
  }

  // Populate Step 2: Doctors
  function populateStep2() {
    if (!docGrid) return;
    docGrid.innerHTML = '';

    // Add "Any Available Specialist (Fastest)" option
    const anyDocCard = document.createElement('div');
    anyDocCard.className = `doc-radio-card ${bookingState.selectedDoctor.id === 'any' ? 'selected' : ''}`;
    anyDocCard.innerHTML = `
      <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--primary-100); display: flex; align-items: center; justify-content: center; color: var(--primary-700); font-weight: 800; font-size: 1.1rem;">⚡</div>
      <div>
        <span class="doc-radio-name">Any Available Specialist</span>
        <span class="doc-radio-spec">Fastest Consultation Queue</span>
      </div>
    `;
    anyDocCard.addEventListener('click', () => {
      document.querySelectorAll('.doc-radio-card').forEach(c => c.classList.remove('selected'));
      anyDocCard.classList.add('selected');
      bookingState.selectedDoctor = { id: 'any', name: 'First Available Specialist, MDS', title: 'On-Duty Chief Specialist' };
    });
    docGrid.appendChild(anyDocCard);

    mockDoctors.forEach(doc => {
      const card = document.createElement('div');
      card.className = `doc-radio-card ${doc.id === bookingState.selectedDoctor.id ? 'selected' : ''}`;
      card.innerHTML = `
        <img src="${doc.avatar}" alt="${doc.name}" class="doc-radio-img">
        <div>
          <span class="doc-radio-name">${doc.name}</span>
          <span class="doc-radio-spec">${doc.title}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        document.querySelectorAll('.doc-radio-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        bookingState.selectedDoctor = doc;
      });

      docGrid.appendChild(card);
    });
  }

  // Populate Step 3: Dates & Time Slots
  function generateNextDays() {
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const now = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(now.getDate() + i);
      days.push({
        label: i === 0 ? 'Today' : (i === 1 ? 'Tomorrow' : weekdays[d.getDay()]),
        dateNum: d.getDate(),
        month: months[d.getMonth()],
        fullString: `${i === 0 ? 'Today' : weekdays[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`
      });
    }
    return days;
  }

  function populateDates() {
    if (!dateScrollRow) return;
    dateScrollRow.innerHTML = '';
    const days = generateNextDays();

    bookingState.selectedDate = days[0].fullString;

    days.forEach((day, idx) => {
      const pill = document.createElement('div');
      pill.className = `date-pill ${idx === 0 ? 'selected' : ''}`;
      pill.innerHTML = `
        <div class="date-pill-day">${day.label}</div>
        <div class="date-pill-num">${day.dateNum}</div>
        <div style="font-size: 0.7rem; color: var(--text-muted);">${day.month}</div>
      `;

      pill.addEventListener('click', () => {
        document.querySelectorAll('.date-pill').forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
        bookingState.selectedDate = day.fullString;
        renderSlots();
      });

      dateScrollRow.appendChild(pill);
    });
  }

  const shiftSlots = {
    morning: [
      { time: '09:30 AM', status: 'available' },
      { time: '10:15 AM', status: 'available' },
      { time: '11:00 AM', status: 'booked' },
      { time: '11:45 AM', status: 'filling' },
      { time: '12:30 PM', status: 'available' }
    ],
    evening: [
      { time: '04:30 PM', status: 'booked' },
      { time: '05:15 PM', status: 'available' },
      { time: '06:00 PM', status: 'available' },
      { time: '06:45 PM', status: 'filling' },
      { time: '07:30 PM', status: 'available' },
      { time: '08:00 PM', status: 'available' }
    ]
  };

  function renderSlots() {
    if (!slotsContainer) return;
    slotsContainer.innerHTML = '';
    const list = shiftSlots[bookingState.selectedShift];

    list.forEach(slot => {
      const chip = document.createElement('div');
      const isSelected = slot.time === bookingState.selectedSlot && slot.status !== 'booked';
      chip.className = `slot-chip ${slot.status} ${isSelected ? 'selected' : ''}`;
      chip.textContent = slot.time;

      if (slot.status !== 'booked') {
        chip.addEventListener('click', () => {
          document.querySelectorAll('.slot-chip').forEach(c => c.classList.remove('selected'));
          chip.classList.add('selected');
          bookingState.selectedSlot = slot.time;
          nextStep3Btn.removeAttribute('disabled');
        });
      }

      slotsContainer.appendChild(chip);
    });
  }

  // Shift Toggle Handlers
  if (shiftMorningBtn && shiftEveningBtn) {
    shiftMorningBtn.addEventListener('click', () => {
      shiftMorningBtn.classList.add('active');
      shiftEveningBtn.classList.remove('active');
      bookingState.selectedShift = 'morning';
      bookingState.selectedSlot = '10:15 AM';
      renderSlots();
    });

    shiftEveningBtn.addEventListener('click', () => {
      shiftEveningBtn.classList.add('active');
      shiftMorningBtn.classList.remove('active');
      bookingState.selectedShift = 'evening';
      bookingState.selectedSlot = '05:15 PM';
      renderSlots();
    });
  }

  // Navigation between Wizard Panes
  function switchWizardStep(stepNum) {
    // Hide all panes
    document.querySelectorAll('.wizard-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));

    const targetPane = document.getElementById(`pane-step-${stepNum}`);
    if (targetPane) targetPane.classList.add('active');

    for (let i = 1; i <= 4; i++) {
      const ind = document.getElementById(`wiz-step-ind-${i}`);
      const line = document.getElementById(`step-line-${i}`);
      if (i < stepNum) {
        ind.classList.add('completed');
        if (line) line.classList.add('completed');
      } else if (i === stepNum) {
        ind.classList.add('active');
        ind.classList.remove('completed');
      } else {
        ind.classList.remove('active', 'completed');
        if (line) line.classList.remove('completed');
      }
    }

    if (stepNum === 4) {
      // Update Summary Banner
      document.getElementById('summary-proc-name').textContent = bookingState.selectedTreatment.name;
      document.getElementById('summary-doc-name').textContent = bookingState.selectedDoctor.name;
      document.getElementById('summary-date-time').textContent = `${bookingState.selectedDate} @ ${bookingState.selectedSlot}`;
    }
  }

  if (nextStep1Btn) nextStep1Btn.addEventListener('click', () => { populateStep2(); switchWizardStep(2); });
  if (nextStep2Btn) nextStep2Btn.addEventListener('click', () => { populateDates(); renderSlots(); switchWizardStep(3); });
  if (nextStep3Btn) nextStep3Btn.addEventListener('click', () => { switchWizardStep(4); });

  if (backStep2Btn) backStep2Btn.addEventListener('click', () => switchWizardStep(1));
  if (backStep3Btn) backStep3Btn.addEventListener('click', () => switchWizardStep(2));
  if (backStep4Btn) backStep4Btn.addEventListener('click', () => switchWizardStep(3));

  // Initialize Step 1
  populateStep1();

  // Direct Booking Triggers from other sections
  function startBookingWithTreatment(treatmentId) {
    const found = mockTreatments.find(t => t.id === treatmentId);
    if (found) bookingState.selectedTreatment = found;
    populateStep1();
    populateStep2();
    populateDates();
    renderSlots();
    switchWizardStep(3); // Jump straight to slot selection
    document.getElementById('booking-engine').scrollIntoView({ behavior: 'smooth' });
  }

  function startBookingWithDoctor(docId) {
    const found = mockDoctors.find(d => d.id === docId);
    if (found) bookingState.selectedDoctor = found;
    populateStep1();
    populateStep2();
    populateDates();
    renderSlots();
    switchWizardStep(3); // Jump to slot selection
    document.getElementById('booking-engine').scrollIntoView({ behavior: 'smooth' });
  }

  // Patient Form Submission & Simulated Confirmation
  if (patientForm) {
    patientForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('patient-name').value.trim();
      const phoneInput = document.getElementById('patient-phone').value.trim();

      if (!nameInput || !phoneInput) {
        alert('Please provide your name and WhatsApp number.');
        return;
      }

      bookingState.patientName = nameInput;
      bookingState.patientPhone = phoneInput;

      // Generate Random Simulated Token
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      bookingState.generatedToken = `#APX-2026-${randomNum}`;

      // Show loader simulation
      const submitBtn = document.getElementById('btn-submit-booking');
      submitBtn.disabled = true;
      document.getElementById('submit-btn-text').textContent = 'Securing Token Slot in OPD Queue...';

      setTimeout(() => {
        submitBtn.disabled = false;
        document.getElementById('submit-btn-text').textContent = 'Confirm & Generate Token ID';

        // Render Confirmation Pane
        document.querySelectorAll('.wizard-pane').forEach(p => p.classList.remove('active'));
        document.getElementById('pane-confirmation').classList.add('active');

        document.getElementById('receipt-token-id').textContent = bookingState.generatedToken;
        document.getElementById('receipt-patient-name').textContent = bookingState.patientName;
        document.getElementById('receipt-doctor-name').textContent = bookingState.selectedDoctor.name;
        document.getElementById('receipt-procedure').textContent = bookingState.selectedTreatment.name;
        document.getElementById('receipt-datetime').textContent = `${bookingState.selectedDate} @ ${bookingState.selectedSlot}`;

        // Also add to the Live OPD waiting room queue!
        addTokenToLiveQueue(bookingState.generatedToken, bookingState.patientName, bookingState.selectedTreatment.name);

        // Trigger Simulated WhatsApp Alert Toast after 1.2s
        setTimeout(() => {
          showWhatsAppToast(bookingState.patientName, bookingState.generatedToken, bookingState.selectedDoctor.name, bookingState.selectedSlot);
        }, 1200);

      }, 800);
    });
  }

  // Reset Booking Wizard
  const newBookingBtn = document.getElementById('btn-new-booking');
  if (newBookingBtn) {
    newBookingBtn.addEventListener('click', () => {
      patientForm.reset();
      switchWizardStep(1);
    });
  }

  /* ==========================================================================
     6. LIVE OPD WAITING ROOM QUEUE LOGIC
     ========================================================================== */

  const queueClock = document.getElementById('queue-clock');
  const tokenWaitingList = document.getElementById('token-waiting-list');

  // Real-time clock update
  function updateClock() {
    if (!queueClock) return;
    const now = new Date();
    queueClock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  setInterval(updateClock, 1000);
  updateClock();

  function addTokenToLiveQueue(token, name, procedure) {
    if (!tokenWaitingList) return;
    const item = document.createElement('div');
    item.className = 'token-wait-item';
    item.style.borderColor = 'var(--primary-400)';
    item.style.background = 'rgba(20, 184, 166, 0.15)';
    item.innerHTML = `
      <span class="wait-num" style="color: var(--primary-300);">${token}</span>
      <span class="wait-name">${name} (${procedure.split(' ')[0]})</span>
      <span class="wait-eta" style="color: var(--success); font-weight: 700;">CONFIRMED (Next In Line)</span>
    `;
    tokenWaitingList.prepend(item);
  }

  /* ==========================================================================
     7. SIMULATED WHATSAPP NOTIFICATION TOAST
     ========================================================================== */

  const waToast = document.getElementById('whatsapp-toast');
  const waCloseBtn = document.getElementById('wa-close-btn');

  function showWhatsAppToast(patientName, token, docName, slotTime) {
    if (!waToast) return;
    document.getElementById('wa-token-pill').textContent = token;
    const waMsgBody = document.getElementById('wa-message-content');
    waMsgBody.innerHTML = `
      <p><strong>Namaste ${patientName}!</strong></p>
      <p>Your appointment at Apex Dental Studio is confirmed. Your digital OPD token is <span class="wa-token">${token}</span>.</p>
      <div class="wa-meta-box">
        <span>👨‍⚕️ <strong>Doctor:</strong> ${docName}</span>
        <span>⏱ <strong>Slot Time:</strong> ${slotTime} (Please arrive 5 mins early)</span>
        <span>📍 <strong>Location:</strong> Main Road, Kadapa</span>
      </div>
      <p class="wa-footer-msg">Present this digital token at the reception desk to bypass the queue.</p>
    `;

    waToast.classList.add('show');
  }

  if (waCloseBtn) {
    waCloseBtn.addEventListener('click', () => {
      waToast.classList.remove('show');
    });
  }

  /* ==========================================================================
     8. 60-SECOND INTERACTIVE SMILE ASSESSMENT QUIZ MODAL
     ========================================================================== */

  const quizOverlay = document.getElementById('quiz-modal-overlay');
  const quizModalBody = document.getElementById('quiz-modal-body');
  const quizTitle = document.getElementById('quiz-question-title');
  const quizCloseBtn = document.getElementById('quiz-close-btn');

  const quizTriggerBtn = document.getElementById('nav-quiz-trigger-btn');
  const heroQuizBtn = document.getElementById('hero-start-quiz-btn');
  const mobileQuizBtn = document.getElementById('m-quiz-trigger-btn');

  const quizQuestions = [
    {
      title: "What is your primary dental concern right now?",
      options: [
        { label: "⚡ Severe toothache / Sensitivity to cold water", targetCategory: "rct-laser", diagnosis: "Immediate Laser Root Canal Assessment" },
        { label: "🦷 Missing one or multiple teeth (Difficulty chewing)", targetCategory: "implant-single", diagnosis: "Computerized Titanium Implant Scan" },
        { label: "✨ Crooked / Gapped teeth (Want straight smile)", targetCategory: "clear-aligners", diagnosis: "3D Digital Clear Aligner Simulation" },
        { label: "☕ Yellow stains / Want a brighter white smile", targetCategory: "laser-whitening", diagnosis: "In-Clinic Laser Teeth Whitening" }
      ]
    },
    {
      title: "How long have you experienced this issue?",
      options: [
        { label: "Sudden onset (Within the past 24-48 hours)" },
        { label: "A few weeks to a couple of months" },
        { label: "Long-standing issue (Over 6 months to years)" }
      ]
    },
    {
      title: "Do you experience dental anxiety or fear of needles?",
      options: [
        { label: "Yes, I am nervous (I prefer 100% painless laser protocols)" },
        { label: "No, I am completely comfortable with standard dental care" }
      ]
    }
  ];

  let currentQuizStep = 0;
  let chosenDiagnosis = null;
  let targetTreatmentId = "implant-single";

  function openQuiz() {
    currentQuizStep = 0;
    renderQuizStep(0);
    quizOverlay.classList.add('open');
  }

  function closeQuiz() {
    quizOverlay.classList.remove('open');
  }

  function renderQuizStep(stepIndex) {
    if (stepIndex >= quizQuestions.length) {
      // Show Result
      renderQuizResult();
      return;
    }

    const q = quizQuestions[stepIndex];
    quizTitle.textContent = q.title;

    // Update dots
    for (let i = 1; i <= 3; i++) {
      const dot = document.getElementById(`qdot-${i}`);
      if (dot) {
        if (i - 1 === stepIndex) dot.classList.add('active');
        else dot.classList.remove('active');
      }
    }

    quizModalBody.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `
        <span>${opt.label}</span>
        <span style="color: var(--primary-600); font-weight: 800;">&rarr;</span>
      `;
      btn.addEventListener('click', () => {
        if (stepIndex === 0) {
          chosenDiagnosis = opt.diagnosis;
          targetTreatmentId = opt.targetCategory;
        }
        currentQuizStep++;
        renderQuizStep(currentQuizStep);
      });
      quizModalBody.appendChild(btn);
    });
  }

  function renderQuizResult() {
    quizTitle.textContent = "Your Smile Evaluation is Complete!";
    quizModalBody.innerHTML = `
      <div class="quiz-result-card">
        <div class="quiz-badge-voucher">🎉 ₹500 CONSULTATION VOUCHER APPLIED</div>
        <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-900); margin-bottom: 8px;">
          Recommended Solution: ${chosenDiagnosis || "Comprehensive Digital Smile Scan"}
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 24px;">
          Based on your symptoms, our specialists recommend a 3D computerized consultation with zero waiting time.
        </p>
        <button class="btn btn-primary-gradient btn-lg w-full" id="quiz-apply-btn">
          Reserve Priority Slot with Voucher &rarr;
        </button>
      </div>
    `;

    document.getElementById('quiz-apply-btn').addEventListener('click', () => {
      closeQuiz();
      startBookingWithTreatment(targetTreatmentId);
    });
  }

  if (quizTriggerBtn) quizTriggerBtn.addEventListener('click', openQuiz);
  if (heroQuizBtn) heroQuizBtn.addEventListener('click', openQuiz);
  if (mobileQuizBtn) mobileQuizBtn.addEventListener('click', openQuiz);
  if (quizCloseBtn) quizCloseBtn.addEventListener('click', closeQuiz);
  if (quizOverlay) {
    quizOverlay.addEventListener('click', (e) => {
      if (e.target === quizOverlay) closeQuiz();
    });
  }

  /* ==========================================================================
     9. CLINICAL PROTOCOL DRAWER MODAL LOGIC
     ========================================================================== */

  const protocolOverlay = document.getElementById('protocol-modal-overlay');
  const protocolCloseBtn = document.getElementById('protocol-close-btn');
  const protocolDirectBookBtn = document.getElementById('protocol-book-direct-btn');

  let activeProtocolTreatmentId = null;

  function openProtocolModal(treatmentId) {
    const item = mockTreatments.find(t => t.id === treatmentId);
    if (!item) return;

    activeProtocolTreatmentId = treatmentId;
    document.getElementById('protocol-category').textContent = `${item.badge} Protocol`;
    document.getElementById('protocol-title').textContent = item.name;
    document.getElementById('protocol-tagline').textContent = item.tagline;
    document.getElementById('protocol-price').textContent = `₹${item.startingPrice.toLocaleString('en-IN')}`;
    document.getElementById('protocol-emi').textContent = item.emiStarting ? `EMI starting @ ₹${item.emiStarting}/mo` : '0% Interest EMI Available';

    const stagesBody = document.getElementById('protocol-stages-body');
    stagesBody.innerHTML = '';

    item.protocolSteps.forEach((step, idx) => {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'protocol-stage-item';
      stepDiv.innerHTML = `
        <div class="stage-num">${idx + 1}</div>
        <div class="stage-info">
          <strong>${step.title}</strong>
          <p>${step.desc}</p>
        </div>
      `;
      stagesBody.appendChild(stepDiv);
    });

    protocolOverlay.classList.add('open');
  }

  function closeProtocolModal() {
    protocolOverlay.classList.remove('open');
  }

  if (protocolCloseBtn) protocolCloseBtn.addEventListener('click', closeProtocolModal);
  if (protocolOverlay) {
    protocolOverlay.addEventListener('click', (e) => {
      if (e.target === protocolOverlay) closeProtocolModal();
    });
  }

  if (protocolDirectBookBtn) {
    protocolDirectBookBtn.addEventListener('click', () => {
      closeProtocolModal();
      if (activeProtocolTreatmentId) {
        startBookingWithTreatment(activeProtocolTreatmentId);
      }
    });
  }

  /* ==========================================================================
     10. FAQ ACCORDION LOGIC
     ========================================================================== */

  const faqListContainer = document.getElementById('faq-accordion-list');

  function renderFaqs() {
    if (!faqListContainer) return;
    faqListContainer.innerHTML = '';

    mockFaqs.forEach((item, idx) => {
      const faqItem = document.createElement('div');
      faqItem.className = `accordion-item ${idx === 0 ? 'open' : ''}`;
      faqItem.id = `faq-item-${idx}`;

      faqItem.innerHTML = `
        <div class="accordion-header" id="faq-head-${idx}">
          <span>${item.q}</span>
          <span class="accordion-icon">+</span>
        </div>
        <div class="accordion-content">
          <p>${item.a}</p>
        </div>
      `;

      faqItem.querySelector('.accordion-header').addEventListener('click', () => {
        const isOpen = faqItem.classList.contains('open');
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) faqItem.classList.add('open');
      });

      faqListContainer.appendChild(faqItem);
    });
  }

  renderFaqs();

  /* ==========================================================================
     11. ANIMATED METRICS COUNTER ON SCROLL
     ========================================================================== */

  const metricVals = document.querySelectorAll('.metric-val');
  let metricsAnimated = false;

  const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !metricsAnimated) {
        metricsAnimated = true;
        metricVals.forEach(valEl => {
          const target = parseInt(valEl.getAttribute('data-target'), 10);
          if (isNaN(target)) return;

          let count = 0;
          const duration = 1500;
          const increment = Math.ceil(target / (duration / 25));

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              valEl.textContent = target.toLocaleString('en-IN');
              clearInterval(timer);
            } else {
              valEl.textContent = count.toLocaleString('en-IN');
            }
          }, 25);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsBar = document.getElementById('metrics-bar');
  if (metricsBar) metricsObserver.observe(metricsBar);

  /* ==========================================================================
     12. MOBILE NAVIGATION DRAWER
     ========================================================================== */

  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

});
