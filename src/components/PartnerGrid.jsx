import React from 'react';

const partners = [
  { 
    name: 'EICHER', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665693/Skills%20Olympiad/Industry%20Partners/EICHER_pca4te.png'
  },
  { 
    name: 'RSB', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665691/Skills%20Olympiad/Industry%20Partners/RSB-logo_hfikrm.png',
    tagline: 'Where Dreams are Responsibilities'
  },
  { 
    name: 'ALIMCO', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665692/Skills%20Olympiad/Industry%20Partners/ALIMCO_hzjuo5.jpg'
  },
  { 
    name: 'BASUDHA', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665692/Skills%20Olympiad/Industry%20Partners/BASUDHA_tqj04v.png',
    tagline: 'Drinking Water for All'
  },
  { 
    name: 'TATA TECHNOLOGIES', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665691/Skills%20Olympiad/Industry%20Partners/TATA-TECHNOLOGIES-logo_gcsfnh.png'
  },
  { 
    name: 'TATA STRIVE', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665692/Skills%20Olympiad/Industry%20Partners/TATA-STRIVE_obetyc.png'
  },
  { 
    name: 'GENERAL AERONAUTICS', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665692/Skills%20Olympiad/Industry%20Partners/General_Aurenautics_nmepv3.png'
  },
  { 
    name: 'OMFED', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665691/Skills%20Olympiad/Industry%20Partners/OMFED_rkke5g.png'
  },
  { 
    name: 'CTTC BHUBANESWAR', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665692/Skills%20Olympiad/Industry%20Partners/CTTC_pvm7hq.png'
  },
  { 
    name: 'ISRO', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665691/Skills%20Olympiad/Industry%20Partners/ISRO_qkprx2.png'
  },
  { 
    name: 'HINDUSTAN AERONAUTICS LIMITED', 
    logo: 'https://res.cloudinary.com/dheuqshro/image/upload/v1731665692/Skills%20Olympiad/Industry%20Partners/Hindustan_Aeuronautics_xao5vb.png'
  },
];

const PartnerCard = ({ name, logo, tagline }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 group">
    <div className="aspect-video relative overflow-hidden rounded-lg mb-4 flex items-center justify-center">
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
    {tagline && (
      <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tagline}
      </p>
    )}
  </div>
);

export default function PartnerGrid() {
  return (
    <div id="partners" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {partners.map((partner, index) => (
        <PartnerCard
          key={partner.name}
          {...partner}
          className={`animate-fade-in animation-delay-${index * 200}`}
        />
      ))}
    </div>
  );
}