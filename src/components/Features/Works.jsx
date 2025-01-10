import React, { useState } from 'react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../../constants/portfolio';
import CategoryFilter from './CategoryFilter';
import WorkCard from './WorkCard';

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredWorks = PORTFOLIO_ITEMS.filter(
    work => selectedCategory === 'All' || work.category === selectedCategory
  );

  return (
    <section id={"features" || "pages"} className="py-20 bg-gray-50">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12 sm:px-4 px-3">
          <h2 className="text-3xl font-bold text-primary uppercase mb-5">Featured Works</h2>
          <p className="text-sm max-w-3xl font-[400] mx-auto text-secondary text-center">
            Lorem ipsum dolor sit amet, sed dicunt oporteat cu, laboramus definiebas cum et. Duo id omnis persequeris neglegentur, facete commodo ea usu, possit lucilius sed ei. Esse efficiendi scripserit eos ex. Sea utamur iisque salutatus id.Mel autem animal.
          </p>
        </div>

        <CategoryFilter
          categories={PORTFOLIO_CATEGORIES}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;