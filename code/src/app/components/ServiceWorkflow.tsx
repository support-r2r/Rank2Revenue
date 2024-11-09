// ServiceWorkflow.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const steps = [
  { title: 'Step 1', description: 'Description for step 1.' },
  { title: 'Step 2', description: 'Description for step 2.' },
  { title: 'Step 3', description: 'Description for step 3.' },
  { title: 'Step 4', description: 'Description for step 4.' },
];

const ServiceWorkflow: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="flex h-screen w-full">
      {/* Left side progress meter */}
      <div className="sticky top-0 w-16 bg-gray-200">
        <motion.div
          className="h-full bg-green-500"
          style={{ height: progress + '%' }}
        />
      </div>

      {/* Right side content */}
      <div ref={ref} className="flex-1 space-y-8 p-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-md shadow-md"
          >
            <h2 className="text-xl font-semibold">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceWorkflow;
