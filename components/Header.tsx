"use client";

import React, { useState } from "react";
import { Coffee, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const donateUrl = "https://buymeacoffee.com/0xejebduoo"; // Took from the previous conversation history (or I can just use a generic one if I don't know it, but user mentioned it before, let's use a standard one and the user can change it). Let's use https://buymeacoffee.com/0xejebduoo as it was updated recently.

  return (
    <header className="h-16 bg-[#1e1e1e] border-b border-[#333] flex items-center justify-between px-6 sticky top-0 z-10 w-full">
      <div className="flex-1"></div>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 bg-[#ffdd00] hover:bg-[#ffea00] text-black font-semibold py-2 px-4 rounded-full transition-transform active:scale-95 shadow-md"
        >
          <Coffee className="w-5 h-5" />
          <span>Buy me a coffee</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm p-4">
          <div className="bg-[#252525] border border-[#333] rounded-xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-[#333]">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Coffee className="w-6 h-6 text-[#ffdd00]" />
                Support My Work
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-[#333]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 flex flex-col items-center space-y-6">
              <p className="text-gray-300 text-center text-sm">
                If you find this tool useful, you can support its development by buying me a coffee!
              </p>
              
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <QRCodeSVG value={donateUrl} size={180} />
              </div>
              
              <div className="w-full pt-4">
                <a
                  href={donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#ffdd00] hover:bg-[#ffea00] text-black font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Go to Donate Page
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
