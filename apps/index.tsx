
interface App {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  appUrl: string;
  imageAlt: string;
}

const apps: App[] = [
  {
    id: 'app1',
    name: 'QuantumLeap AI',
    description: 'Harnessing AI for predictive analytics and insightful decision-making across industries.',
    category: 'Artificial Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    appUrl: '#quantumleap-ai',
    imageAlt: 'Abstract AI visualization'
  },
  {
    id: 'app2',
    name: 'FinSecure Pro',
    description: 'Comprehensive financial management and security solutions for modern enterprises.',
    category: 'Finance',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    appUrl: '#finsecure-pro',
    imageAlt: 'Golden coins and financial charts'
  },
  {
    id: 'app3',
    name: 'CollabSphere',
    description: 'Seamless team collaboration and project management to boost global productivity.',
    category: 'Productivity',
    imageUrl: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    appUrl: '#collabsphere',
    imageAlt: 'Team collaborating around a table'
  },
  {
    id: 'app4',
    name: 'EcoTrack Suite',
    description: 'Monitor and optimize your environmental impact with our smart sustainability tools.',
    category: 'Sustainability',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    appUrl: '#ecotrack',
    imageAlt: 'Lush green forest canopy'
  },
  {
    id: 'app5',
    name: 'HealthSync Plus',
    description: 'Personalized health monitoring and telehealth services for a better lifestyle.',
    category: 'Healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    appUrl: '#healthsync',
    imageAlt: 'Doctor using a stethoscope'
  },
  {
    id: 'app6',
    name: 'EduVerse Learn',
    description: 'Interactive e-learning platform with gamified courses for all age groups.',
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    appUrl: '#eduverse',
    imageAlt: 'Open book with glowing pages'
  },
   {
    id: 'app7',
    name: 'RetailOS Master',
    description: 'Next-gen operating system for retail businesses, integrating POS and inventory.',
    category: 'E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    appUrl: '#retailos',
    imageAlt: 'Modern retail store interior'
  },
  {
    id: 'app8',
    name: 'CreatorHub Studio',
    description: 'All-in-one platform for content creators to produce, manage, and monetize.',
    category: 'Creator Economy',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    appUrl: '#creatorhub',
    imageAlt: 'Person working on a laptop with creative tools'
  }
];

function createAppCard(app: App): HTMLElement {
  const card = document.createElement('div');
  card.className = 'app-card bg-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col border border-slate-700';
  card.setAttribute('aria-labelledby', `appName-${app.id}`);
  card.setAttribute('aria-describedby', `appDesc-${app.id}`);

  card.innerHTML = `
    <div class="relative h-56 w-full">
      <img src="${app.imageUrl}" alt="${app.imageAlt}" class="w-full h-full object-cover" loading="lazy">
      <div class="absolute top-2 right-2">
        <span class="inline-block bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          ${app.category}
        </span>
      </div>
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <h2 id="appName-${app.id}" class="text-2xl font-semibold text-sky-300 mb-2">${app.name}</h2>
      <p id="appDesc-${app.id}" class="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">${app.description}</p>
      <a href="${app.appUrl}" 
         target="_blank" rel="noopener noreferrer"
         class="mt-auto inline-block bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
         aria-label="Explore ${app.name}">
        Explore App
      </a>
    </div>
  `;
  return card;
}

function renderApps(): void {
  const appGrid = document.getElementById('app-grid');
  if (appGrid) {
    appGrid.innerHTML = ''; // Clear existing content
    apps.forEach(app => {
      const cardElement = createAppCard(app);
      appGrid.appendChild(cardElement);
    });
  } else {
    console.error('App grid container not found.');
  }
}

// Initial render
document.addEventListener('DOMContentLoaded', renderApps);
