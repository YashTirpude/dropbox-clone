"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  PackageOpen,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Branding */}
        <div className="col-span-full md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-4 justify-center md:justify-start w-full">
            <PackageOpen className="h-8 w-8 mr-2 text-blue-600" />
            <span className="text-xl font-bold dark:text-white">Dropbox</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
            Secure cloud storage and file sharing made simple.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="col-span-full md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product Links */}
          <div className="flex flex-col">
            <h6 className="font-semibold mb-4 dark:text-white">Product</h6>
            <div className="space-y-2">
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Features
              </div>
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Pricing
              </div>
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Security
              </div>
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Integrations
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h6 className="font-semibold mb-4 dark:text-white">Company</h6>
            <div className="space-y-2">
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                About
              </div>
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Careers
              </div>
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Press
              </div>
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Contact
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col">
            <h6 className="font-semibold mb-4 dark:text-white">Resources</h6>
            <div className="space-y-2">
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Blog
              </div>
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Help Center
              </div>
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Documentation
              </div>
              <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
                Status
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="container mx-auto px-4 mt-8 pt-8 border-t dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} DropClone. All rights reserved.
        </p>
        <div className="flex space-x-4 justify-center md:justify-end w-full md:w-auto">
          <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
            <Facebook className="h-5 w-5" />
          </div>
          <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
            <Twitter className="h-5 w-5" />
          </div>
          <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
            <Instagram className="h-5 w-5" />
          </div>
          <div className="text-gray-600 hover:text-blue-600 dark:text-gray-400 cursor-pointer">
            <Linkedin className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
