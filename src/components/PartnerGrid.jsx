import React from 'react';

const partners = [
  { 
    name: 'EICHER', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331445/EICHER_pca4te_lsnxby.png'
  },
  { 
    name: 'RSB', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331452/RSB-logo_hfikrm_nminay.png',
    tagline: 'Where Dreams are Responsibilities'
  },
  { 
    name: 'ALIMCO', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331437/ALIMCO_hzjuo5_mwap9t.jpg'
  },
  { 
    name: 'BASUDHA', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331439/BASUDHA_tqj04v_buhw1r.png',
    tagline: 'Drinking Water for All'
  },
  { 
    name: 'TATA TECHNOLOGIES', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331455/TATA-TECHNOLOGIES-logo_gcsfnh_tduxr6.png'
  },
  { 
    name: 'TATA STRIVE', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331454/TATA-STRIVE_obetyc_czzv9o.png'
  },
  { 
    name: 'GENERAL AERONAUTICS', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331444/General_Aurenautics_nmepv3_fwtwqd.png'
  },
  { 
    name: 'OMFED', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331450/OMFED_rkke5g_v2wwdj.png'
  },
  { 
    name: 'CTTC BHUBANESWAR', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331441/CTTC_pvm7hq_htod8f.png'
  },
  { 
    name: 'ISRO', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331448/ISRO_qkprx2_odroic.png'
  },
  { 
    name: 'HINDUSTAN AERONAUTICS LIMITED', 
    logo: 'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331447/Hindustan_Aeuronautics_xao5vb_dftqcx.png'
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