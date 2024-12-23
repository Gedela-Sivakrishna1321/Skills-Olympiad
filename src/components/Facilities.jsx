import React, { useState } from 'react';
import { Wrench, Scissors, Car, Monitor, Hotel, Droplet, Flame, Sparkles, Building } from 'lucide-react';
import ImageModal from './ImageModal';

const facilities = [
  {
    title: 'Advance Wood Engineering Lab',
    icon: <Wrench className="w-6 h-6" />,
    description: 'Our state-of-the-art wood engineering lab is equipped with precision tools and machines, enabling participants to demonstrate their carpentry and woodworking expertise in a professional environment.',
    images: [
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331509/WOOD_LAB_1_ringrf.png',
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331504/WOOD_LAB_2_uh2vwb_nfq2xc.png'
    ]
  },
  {
    title: 'Apparel Manufacturing Lab',
    icon: <Scissors className="w-6 h-6" />,
    description: 'The apparel lab provides a comprehensive setup for designing, cutting, and stitching, perfect for evaluating skills in fashion and garment manufacturing.',
    images: [
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331460/APPAREL_1_vwv2qj_k6t7e6.png'
    ]
  },
  {
    title: 'Automotive Lab',
    icon: <Car className="w-6 h-6" />,
    description: 'A modern automotive facility designed to test participants\' skills in vehicle repair, diagnostics, and assembly with cutting-edge tools and real-world scenarios.',
    images: [
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331464/AUTOMOTIVE_1_isoyjy.png',
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331467/AUTOMOTIVE_2_a1lhmh_m5qmfk.png'
    ]
  },
  {
    title: 'IT Lab',
    icon: <Monitor className="w-6 h-6" />,
    description: 'Fully equipped IT labs with the latest software and systems for testing proficiency in programming, networking, and other digital skills.',
    images: [
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331483/IT_1_gasqpx.png'
    ]
  },
  {
    title: 'Tourism & Hospitality Lab',
    icon: <Hotel className="w-6 h-6" />,
    description: 'Simulated hospitality and tourism environments that allow participants to showcase their skills in customer service, management, and event planning.',
    images: [
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331490/TOURISM_1_uqvkje.png',
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331492/TOURISM_2_rqsj7l.png'
    ]
  },
  {
    title: 'Plumbing Lab',
    icon: <Droplet className="w-6 h-6" />,
    description: 'Advanced plumbing workstations where participants can demonstrate practical expertise in installations, maintenance, and troubleshooting.',
    images: [
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331490/PLUMBING_1_lcbb3v_shczml.png',
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331488/PLUMBING_2_mqojzn_jqhlfm.png'
    ]
  },
  {
    title: 'Welding Lab',
    icon: <Flame className="w-6 h-6" />,
    description: 'A dedicated welding facility with modern equipment, designed for testing precision, safety, and craftsmanship in welding tasks.',
    images: [
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331498/WELDING_1_f5inkq_keyco9.png',
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331499/WELDING_2_nekexe_rxe7og.png'
    ]
  },
  {
    title: 'Beauty and Wellness Lab',
    icon: <Sparkles className="w-6 h-6" />,
    description: 'A professional setup for evaluating skills in beauty therapy, hairdressing, and wellness practices in a real-world setting.',
    images: [
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331471/BEAUTIY_oubyh7_hfvrrh.png'
    ]
  },
  {
    title: 'Construction Lab',
    icon: <Building className="w-6 h-6" />,
    description: 'Comprehensive construction labs equipped to test skills in masonry, structural work, and project execution with real materials and tools.',
    images: [
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331473/CONSTRUCTION_1_uiixbu.png',
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331474/CONSTRUCTION_2_vmhqxn.png',
      'https://res.cloudinary.com/dxorxllhb/image/upload/v1734331476/CONSTRUCTION_3_mibmkf.png'
    ]
  }
];

const FacilityCard = ({ title, description, images, icon }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = (e) => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all transform hover:-translate-y-1">
        <div 
          className="relative aspect-video overflow-hidden cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white flex items-center">
            <div className="p-2 bg-blue-600 rounded-lg mr-3">
              {icon}
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
          {images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
              +{images.length - 1} more
            </div>
          )}
        </div>
        <div className="p-6">
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>

      {modalOpen && (
        <ImageModal
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setModalOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Facilities for Hands-On Practical Exam
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience excellence in our state-of-the-art facilities designed for practical skill assessment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} {...facility} />
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
            Learn More About Practical Exams
          </button>
        </div> */}
      </div>
    </section>
  );
}