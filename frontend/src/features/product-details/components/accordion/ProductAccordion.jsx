import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ProductAccordionItem = ({ id, title, children, isOpen, onToggle }) => {
  return (
    <div className="border-t border-[#E5E5E5]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
      >
        <h2 className="text-base font-medium text-[#3A3845]">{title}</h2>

        <div className="relative h-4.5 w-4.5">
          <Plus
            size={18}
            className={`absolute transition-all duration-300 ${
              isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`}
          />

          <Minus
            size={18}
            className={`absolute transition-all duration-300 ${
              isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
            }`}
          />
        </div>
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm leading-7 text-[#807F86]">{children}</div>
      </div>
    </div>
  );
};

const ProductAccordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mt-16">
      {items.map((item, index) => (
        <ProductAccordionItem
          key={`${item.title}-${index}`}
          id={`accordion-${index}`}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </ProductAccordionItem>
      ))}
    </section>
  );
};

export default ProductAccordion;
