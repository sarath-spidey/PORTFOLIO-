const defaultConfig = {
  site_name: "Sarath T",
  profile_title: "Artificial intelligence and ML Engineer",
  welcome_message: "WELCOME TO MY PORTFOLIO  VIEWERS!",
  hero_description: "Crafting beautiful digital experiences with passion and precision. Bringing ideas to life through innovative design and clean code.",
  about_description: "I'm a passionate creative professional who loves transforming ideas into stunning digital experiences. With a blend of design thinking and technical expertise, I create solutions that are not only beautiful but also functional and user-friendly. Every project is an opportunity to push boundaries and deliver excellence.",
  contact_email: "sarathpooja2004@gmail.com",
  contact_phone: "+91 6383461870",
  contact_address: "selvam nagar 1st cross street,Ponniyammanmedu,Kolathur",
  background_color: "#667eea",
  surface_color: "#ffffff",
  text_color: "#2d3748",
  primary_action_color: "#764ba2",
  secondary_action_color: "#f093fb",
  font_family: "Inter",
  font_size: 16
};

// Typing animation
let typingTimeout;
function typeWriter(text, element, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      typingTimeout = setTimeout(type, speed);
    }
  }
  
  type();
}

function startTypingAnimation(message) {
  const welcomeText = document.getElementById('welcome-text');
  if (typingTimeout) {
    clearTimeout(typingTimeout);
  }
  typeWriter(message, welcomeText, 80);
}

window.addEventListener('load', () => {
  const config = window.elementSdk ? window.elementSdk.config : defaultConfig;
  const message = config.welcome_message || defaultConfig.welcome_message;
  startTypingAnimation(message);
});

// Dropdown functionality
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

dropdownToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('active');
});

document.addEventListener('click', () => {
  dropdown.classList.remove('active');
});

// Element SDK Implementation
async function onConfigChange(config) {
  const baseSize = config.font_size || defaultConfig.font_size;
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'Inter, Segoe UI, sans-serif';

  // Update text content
  document.getElementById('site-name').textContent = config.site_name || defaultConfig.site_name;
  document.getElementById('footer-name').textContent = config.site_name || defaultConfig.site_name;
  document.getElementById('profile-title').textContent = config.profile_title || defaultConfig.profile_title;
  document.getElementById('hero-description').textContent = config.hero_description || defaultConfig.hero_description;
  document.getElementById('about-description').textContent = config.about_description || defaultConfig.about_description;
  document.getElementById('contact-email').textContent = config.contact_email || defaultConfig.contact_email;
  document.getElementById('contact-phone').textContent = config.contact_phone || defaultConfig.contact_phone;
  document.getElementById('contact-address').innerHTML = (config.contact_address || defaultConfig.contact_address).replace(/\n/g, '<br>');

  // Update welcome message with typing animation
  const welcomeMessage = config.welcome_message || defaultConfig.welcome_message;
  startTypingAnimation(welcomeMessage);

  // Update colors
  document.body.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.primary_action_color || defaultConfig.primary_action_color} 50%, ${config.secondary_action_color || defaultConfig.secondary_action_color} 100%)`;

  document.querySelectorAll('.about-content, .contact-card, .resume-column, .project-card').forEach(el => {
    el.style.background = `rgba(255,255,255,0.95)`;
  });

  document.querySelectorAll('.section-title, .profile-title, .welcome-text').forEach(el => {
    el.style.color = config.surface_color || defaultConfig.surface_color;
  });

  document.querySelectorAll('.about-text, .contact-card h3, .contact-card p, .project-card h3, .project-card p').forEach(el => {
    el.style.color = config.text_color || defaultConfig.text_color;
  });

  document.querySelectorAll('.skill-card').forEach(card => {
    card.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color}, ${config.primary_action_color || defaultConfig.primary_action_color})`;
  });

  document.querySelectorAll('.resume-item').forEach(item => {
    item.style.background = `linear-gradient(135deg, ${config.secondary_action_color || defaultConfig.secondary_action_color} 0%, ${config.primary_action_color || defaultConfig.primary_action_color} 100%)`;
  });

  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.style.background = config.surface_color || defaultConfig.surface_color;
    btn.style.color = config.primary_action_color || defaultConfig.primary_action_color;
  });

  // Update fonts
  const elementsForFont = [
    document.getElementById('site-name'),
    document.getElementById('welcome-text'),
    document.getElementById('profile-title'),
    document.getElementById('hero-description'),
    ...document.querySelectorAll('.section-title, .subsection-title')
  ];

  elementsForFont.forEach(el => {
    if (el) el.style.fontFamily = `${customFont}, ${baseFontStack}`;
  });

  // Update font sizes
  document.getElementById('site-name').style.fontSize = `${baseSize * 1.8}px`;
  document.getElementById('welcome-text').style.fontSize = `${baseSize * 2.5}px`;
  document.getElementById('profile-title').style.fontSize = `${baseSize * 3.5}px`;
  document.getElementById('hero-description').style.fontSize = `${baseSize * 1.3}px`;
  document.querySelectorAll('.section-title').forEach(el => {
    el.style.fontSize = `${baseSize * 3}px`;
  });
  document.querySelectorAll('.subsection-title').forEach(el => {
    el.style.fontSize = `${baseSize * 2}px`;
  });
  document.getElementById('about-description').style.fontSize = `${baseSize * 1.2}px`;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.config.surface_color = value;
            window.elementSdk.setConfig({ surface_color: value });
          }
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        }
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.config.primary_action_color = value;
            window.elementSdk.setConfig({ primary_action_color: value });
          }
        }
      },
      {
        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.config.secondary_action_color = value;
            window.elementSdk.setConfig({ secondary_action_color: value });
          }
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        if (window.elementSdk) {
          window.elementSdk.config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        if (window.elementSdk) {
          window.elementSdk.config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["site_name", config.site_name || defaultConfig.site_name],
    ["profile_title", config.profile_title || defaultConfig.profile_title],
    ["welcome_message", config.welcome_message || defaultConfig.welcome_message],
    ["hero_description", config.hero_description || defaultConfig.hero_description],
    ["about_description", config.about_description || defaultConfig.about_description],
    ["contact_email", config.contact_email || defaultConfig.contact_email],
    ["contact_phone", config.contact_phone || defaultConfig.contact_phone],
    ["contact_address", config.contact_address || defaultConfig.contact_address]
  ]);
}

// Initialize Element SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}
/* -----------------------------------
   MOBILE MENU TOGGLE
----------------------------------- */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close when clicking a link
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Click outside to close menu
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

