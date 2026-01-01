import React from 'react';
import { Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          {/* Left side - Copyright */}
          <div className="text-sm text-gray-400">
            © 2026 ELFAERA, Inc. All rights reserved.
          </div>

          {/* Right side - Social links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/elfaera.co/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.tiktok.com/@elfaera" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}