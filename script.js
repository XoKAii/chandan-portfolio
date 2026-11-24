/* ==========================================================================
   CHANDAN YADAV — PERSONAL PORTFOLIO INTERACTION LOGIC (EXPANDED)
   Features:
   1. Dark/Light Theme Switcher with localStorage persistence
   2. Pure Vanilla Hero Typing Animation (5 phrases)
   3. IntersectionObserver Scroll Reveal
   4. Smooth Sticky Navigation & Active Section Highlighting
   5. Mobile Drawer Menu with auto-close & accessible attributes
   6. Accessible Project Details Modals (Escape key, backdrop click, scroll-lock)
   7. Developer Command Palette (Ctrl + K / Cmd + K, search filter, action triggers)
   8. Interactive Algorithm Visualizer Sandbox (Binary Search Step-Tracer)
   9. Back-To-Top floating action button
   10. One-click Email Copy utility
   11. Honest Contact Form validation and demonstration message (Option A)
   12. Dynamic Current Year in Footer
   13. Prefers-Reduced-Motion graceful degradation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Dark / Light Theme Toggle
  // ------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or default to 'dark'
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  function toggleTheme() {
    const currentTheme = htmlRoot.getAttribute('data-theme');
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlRoot.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // ------------------------------------------------------------------------
  // 2. Hero Typing Animation (Vanilla JS)
  // ------------------------------------------------------------------------
  const typingTextElement = document.getElementById('typingText');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const typingPhrases = [
    'Computer Science Student.',
    'Aspiring Software Developer.',
    'AI & Data Analytics Enthusiast.',
    'Social Media Management Enthusiast.',
    'Digital Creativity Enthusiast.'
  ];

  if (typingTextElement) {
    if (prefersReducedMotion) {
      typingTextElement.textContent = typingPhrases[0];
    } else {
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingDelay = 80;

      function typeCycle() {
        const currentPhrase = typingPhrases[phraseIndex];

        if (isDeleting) {
          charIndex--;
          typingTextElement.textContent = currentPhrase.substring(0, charIndex);
          typingDelay = 40;
        } else {
          charIndex++;
          typingTextElement.textContent = currentPhrase.substring(0, charIndex);
          typingDelay = 85;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
          typingDelay = 1800; // Pause at end of phrase
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % typingPhrases.length;
          typingDelay = 400;
        }

        setTimeout(typeCycle, typingDelay);
      }

      setTimeout(typeCycle, 500);
    }
  }

  // ------------------------------------------------------------------------
  // 3. Scroll Reveal via IntersectionObserver
  // ------------------------------------------------------------------------
  const revealItems = document.querySelectorAll('.reveal-item');

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('revealed'));
  }

  // ------------------------------------------------------------------------
  // 4. Header Scroll State & Floating Back-To-Top Button
  // ------------------------------------------------------------------------
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollTopBtn) {
      if (scrollY > 380) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  // ------------------------------------------------------------------------
  // 5. Active Navigation Link Highlighting
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(sec => {
      const secTop = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      const secId = sec.getAttribute('id');

      if (scrollPosition >= secTop && scrollPosition < secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // ------------------------------------------------------------------------
  // 6. Mobile Drawer Navigation
  // ------------------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 7. Accessible Project Detail Modals (Phase 10)
  // ------------------------------------------------------------------------
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modalBackdrops = document.querySelectorAll('.project-modal-backdrop, .modal-backdrop');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

  function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.classList.add('active');
      targetModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      const closeBtn = targetModal.querySelector('.modal-close-btn');
      if (closeBtn) closeBtn.focus();
    }
  }

  function closeAllModals() {
    modalBackdrops.forEach(backdrop => {
      backdrop.classList.remove('active');
      backdrop.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  modalBackdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  // ------------------------------------------------------------------------
  // 8. Developer Command Palette (Enhancement 1: Ctrl + K / Cmd + K)
  // ------------------------------------------------------------------------
  const cmdPaletteOverlay = document.getElementById('cmdPaletteOverlay');
  const cmdPaletteBtn = document.getElementById('cmdPaletteBtn');
  const cmdSearchInput = document.getElementById('cmdSearchInput');
  const cmdCloseKbd = document.getElementById('cmdCloseKbd');
  const cmdItems = document.querySelectorAll('.cmd-item');

  function openCommandPalette() {
    if (cmdPaletteOverlay) {
      cmdPaletteOverlay.classList.add('active');
      cmdPaletteOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (cmdSearchInput) {
        cmdSearchInput.value = '';
        filterCommandItems('');
        setTimeout(() => cmdSearchInput.focus(), 50);
      }
    }
  }

  function closeCommandPalette() {
    if (cmdPaletteOverlay) {
      cmdPaletteOverlay.classList.remove('active');
      cmdPaletteOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (cmdPaletteBtn) {
    cmdPaletteBtn.addEventListener('click', openCommandPalette);
  }

  if (cmdCloseKbd) {
    cmdCloseKbd.addEventListener('click', closeCommandPalette);
  }

  if (cmdPaletteOverlay) {
    cmdPaletteOverlay.addEventListener('click', (e) => {
      if (e.target === cmdPaletteOverlay) {
        closeCommandPalette();
      }
    });
  }

  // Global Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // Open with Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdPaletteOverlay && cmdPaletteOverlay.classList.contains('active')) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    }

    // Close on Escape
    if (e.key === 'Escape') {
      closeAllModals();
      closeCommandPalette();
    }
  });

  function filterCommandItems(query) {
    const normalizedQuery = query.toLowerCase().trim();
    cmdItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!normalizedQuery || text.includes(normalizedQuery)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (cmdSearchInput) {
    cmdSearchInput.addEventListener('input', (e) => {
      filterCommandItems(e.target.value);
    });
  }

  // Handle Command Item Execution
  cmdItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action');
      const target = item.getAttribute('data-target');

      closeCommandPalette();

      if (action === 'nav' && target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (action === 'theme') {
        toggleTheme();
      } else if (action === 'copy-email') {
        copyEmailToClipboard();
      } else if (action === 'download-resume') {
        const resumeBtn = document.getElementById('downloadResumeBtn');
        if (resumeBtn) resumeBtn.click();
      }
    });
  });

  // ------------------------------------------------------------------------
  // 9. Interactive Algorithm Visualizer Sandbox (Enhancement 2)
  // ------------------------------------------------------------------------
  const arrayVisualGrid = document.getElementById('arrayVisualGrid');
  const algoTargetInput = document.getElementById('algoTargetInput');
  const btnRunTrace = document.getElementById('btnRunTrace');
  const btnResetTrace = document.getElementById('btnResetTrace');
  const sandboxLogConsole = document.getElementById('sandboxLogConsole');

  // Sorted Array for Binary Search Demonstration
  const sortedArray = [5, 12, 19, 24, 31, 38, 45, 53, 62, 77, 85, 94];

  function renderArrayGrid() {
    if (!arrayVisualGrid) return;
    arrayVisualGrid.innerHTML = '';

    sortedArray.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'array-cell';
      cell.setAttribute('data-index', idx);
      cell.innerHTML = `
        <span class="cell-index">[${idx}]</span>
        <span class="cell-value">${val}</span>
      `;
      arrayVisualGrid.appendChild(cell);
    });
  }

  renderArrayGrid();

  function logConsole(message) {
    if (sandboxLogConsole) {
      sandboxLogConsole.innerHTML = `<span class="console-prompt">&gt;</span> <span class="console-msg">${message}</span>`;
    }
  }

  function resetVisualizer() {
    const cells = document.querySelectorAll('.array-cell');
    cells.forEach(c => {
      c.className = 'array-cell';
    });
    logConsole('Visualizer reset. Select a target number and click "Run Step Trace".');
  }

  if (btnResetTrace) {
    btnResetTrace.addEventListener('click', resetVisualizer);
  }

  if (btnRunTrace && algoTargetInput) {
    btnRunTrace.addEventListener('click', () => {
      const targetVal = parseInt(algoTargetInput.value, 10);
      if (isNaN(targetVal)) {
        logConsole('Error: Please enter a valid numerical target.');
        return;
      }

      resetVisualizer();
      btnRunTrace.disabled = true;

      let low = 0;
      let high = sortedArray.length - 1;
      const steps = [];

      // Pre-calculate binary search steps
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midVal = sortedArray[mid];

        steps.push({ low, high, mid, midVal });

        if (midVal === targetVal) {
          steps.push({ found: true, index: mid });
          break;
        } else if (midVal < targetVal) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      if (low > high) {
        steps.push({ found: false, target: targetVal });
      }

      // Step Animation
      let stepIndex = 0;
      function executeNextStep() {
        if (stepIndex >= steps.length) {
          btnRunTrace.disabled = false;
          return;
        }

        const step = steps[stepIndex];
        const cells = document.querySelectorAll('.array-cell');

        if ('found' in step) {
          if (step.found) {
            cells[step.index].classList.add('found-match');
            logConsole(`Success! Target value ${targetVal} located at index [${step.index}].`);
          } else {
            logConsole(`Target value ${targetVal} not present in sorted array.`);
          }
          btnRunTrace.disabled = false;
          return;
        }

        // Highlight Range & Midpoint
        cells.forEach((c, idx) => {
          c.className = 'array-cell';
          if (idx >= step.low && idx <= step.high) {
            c.classList.add('active-range');
          }
        });

        cells[step.mid].classList.add('active-mid');

        if (step.midVal === targetVal) {
          logConsole(`Checking index [${step.mid}]: Value ${step.midVal} == ${targetVal} (Found!)`);
        } else if (step.midVal < targetVal) {
          logConsole(`Checking index [${step.mid}]: Value ${step.midVal} &lt; ${targetVal} &rarr; Search right subarray (low = ${step.mid + 1})`);
        } else {
          logConsole(`Checking index [${step.mid}]: Value ${step.midVal} &gt; ${targetVal} &rarr; Search left subarray (high = ${step.mid - 1})`);
        }

        stepIndex++;
        setTimeout(executeNextStep, 900);
      }

      executeNextStep();
    });
  }

  // ------------------------------------------------------------------------
  // 10. One-Click Email Copy Utility
  // ------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailVal = document.getElementById('emailVal');
  const copyEmailText = document.getElementById('copyEmailText');

  function copyEmailToClipboard() {
    if (!emailVal) return;
    const email = emailVal.textContent.trim();

    navigator.clipboard.writeText(email).then(() => {
      if (copyEmailText && copyEmailBtn) {
        const originalText = copyEmailText.textContent;
        copyEmailText.textContent = 'Copied!';
        copyEmailBtn.style.background = 'var(--cyan)';
        copyEmailBtn.style.color = '#05070D';

        setTimeout(() => {
          copyEmailText.textContent = originalText;
          copyEmailBtn.style.background = '';
          copyEmailBtn.style.color = '';
        }, 2200);
      }
    }).catch(() => {
      const tempInput = document.createElement('textarea');
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);

      if (copyEmailText) {
        copyEmailText.textContent = 'Copied!';
        setTimeout(() => {
          copyEmailText.textContent = 'Copy';
        }, 2200);
      }
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', copyEmailToClipboard);
  }

  // ------------------------------------------------------------------------
  // 11. Honest Contact Form Validation & Feedback (Option A)
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formNotice = document.getElementById('formNotice');

  if (contactForm && formNotice) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('formName');
      const emailInput = document.getElementById('formEmail');
      const subjectInput = document.getElementById('formSubject');
      const messageInput = document.getElementById('formMessage');

      let isValid = true;

      [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
        if (field && field.parentElement) {
          field.parentElement.classList.remove('has-error');
        }
      });

      if (!nameInput.value.trim()) {
        nameInput.parentElement.classList.add('has-error');
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.add('has-error');
        isValid = false;
      }

      if (!subjectInput.value.trim()) {
        subjectInput.parentElement.classList.add('has-error');
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        messageInput.parentElement.classList.add('has-error');
        isValid = false;
      }

      if (!isValid) {
        formNotice.style.display = 'block';
        formNotice.className = 'form-notice-box';
        formNotice.style.borderColor = '#EF4444';
        formNotice.textContent = 'Please fill out all required fields with valid information.';
        return;
      }

      formNotice.style.display = 'block';
      formNotice.className = 'form-notice-box';
      formNotice.style.borderColor = 'var(--cyan)';
      formNotice.innerHTML = `
        <strong>Thank you for reviewing my portfolio, ${nameInput.value.trim()}!</strong><br>
        <em>Please note:</em> This contact form is currently a frontend demonstration and does not transmit messages to an active backend. To contact me directly, please reach out via the email address listed beside this form, or configure an external endpoint (e.g. Formspree/EmailJS).
      `;

      contactForm.reset();
    });
  }

  // ------------------------------------------------------------------------
  // 12. Dynamic Copyright Year
  // ------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
