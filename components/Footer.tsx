"use client";

import { ScanEye } from "lucide-react";
import { useDemoForm } from "@/lib/demo-form-context";

export function Footer() {
  const { open } = useDemoForm();

  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center text-white">
                <ScanEye size={18} />
              </div>
              <span className="font-display font-semibold text-xl tracking-tight text-brand-900">
                Creator Vision
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
              The platform that ties creator payouts to verified brand exposure.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><button onClick={open} className="hover:text-brand-900 transition-colors">Computer Vision</button></li>
              <li><button onClick={open} className="hover:text-brand-900 transition-colors">Campaign Manager</button></li>
              <li><button onClick={open} className="hover:text-brand-900 transition-colors">Creator Payouts</button></li>
              <li><button onClick={open} className="hover:text-brand-900 transition-colors">Analytics API</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><button onClick={open} className="hover:text-brand-900 transition-colors">For Brands</button></li>
              <li><button onClick={open} className="hover:text-brand-900 transition-colors">For Agencies</button></li>
              <li><button onClick={open} className="hover:text-brand-900 transition-colors">For Creators</button></li>
              <li><button onClick={open} className="hover:text-brand-900 transition-colors">Case Studies</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><button onClick={open} className="hover:text-brand-900 transition-colors">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Creator Vision Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
