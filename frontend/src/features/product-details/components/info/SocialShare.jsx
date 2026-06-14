import React, { useState } from 'react';
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaLink,
  FaInstagram,
} from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const SocialShare = ({ url, title }) => {
  const [copied, setCopied] = useState(false);

  const finalUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(finalUrl);
  const encodedTitle = encodeURIComponent(title || '');

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    `${title || ''} - ${finalUrl}`,
  )}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(finalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy link');
    }
  };

  return (
    <div className="mt-10">
      <span className="text-base font-semibold text-[#3A3845]">
        Share this:
      </span>

      <div className="mt-6 flex items-center gap-3 text-[#C69B7B]">
        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on facebook"
          className="transition-opacity hover:opacity-70"
        >
          <FaFacebookF size={18} />
        </a>
        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="transition-opacity hover:opacity-70"
        >
          <FaWhatsapp size={18} />
        </a>

        {/* Twitter / X */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on twitter"
          className="transition-opacity hover:opacity-70"
        >
          <RiTwitterXLine size={18} />
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on linkedin"
          className="transition-opacity hover:opacity-70"
        >
          <FaLinkedinIn size={18} />
        </a>

        {/* Copy Link (IMPORTANT fallback) */}
        <button
          type="button"
          aria-label="Copy product link"
          onClick={handleCopy}
          className="relative cursor-pointer transition-opacity hover:opacity-70"
        >
          <FaLink size={18} />

          {copied && (
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white">
              Copied!
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
