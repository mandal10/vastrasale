"use client"

import React, { useState } from 'react';

const InviteBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gray-50 text-gray-800 py-2 px-4 flex justify-center md:mt-[70px] mt-[140px]  items-center relative text-sm">
      <span>
        Invite Friends and get <span className="font-semibold">50% off</span> on your next purchase&nbsp;
        <a href="#" className="text-blue-600 hover:underline font-medium">Invite Now</a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
};

export default InviteBanner;
