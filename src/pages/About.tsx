import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 container-custom">
      <h1 className="text-4xl font-serif text-brand-green-dark mb-8">Our Story</h1>
      <div className="prose prose-lg max-w-4xl">
        <p>Bheema Foods started in a small home kitchen, where our founder's mother would spend days sprouting and roasting grains for the family. We believe that nutrition is the greatest legacy we can leave for our children.</p>
        <p>Today, we maintain those same traditional methods—sprouting for 48 hours, slow roasting, and small-batch grinding—to bring that same motherly care to your family's table.</p>
        <h2 className="text-2xl font-serif text-brand-green-dark mt-12 mb-4">Ancient Grains. Everyday Strength.</h2>
        <p>Our mission is to bridge the gap between ancient nutritional wisdom and modern convenience. We source the finest grains and process them using methods that unlock their full nutritional potential.</p>
      </div>
    </div>
  );
};
