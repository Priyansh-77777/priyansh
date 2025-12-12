import React from 'react';
import { Mail, Phone, Linkedin, Download, Github } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Great</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          I'm currently looking for Product Management roles where I can leverage my experience in AI, 0→1 execution, and growth loops.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <a href={`mailto:${HERO_DATA.contact.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-900/20">
            <Mail className="w-5 h-5" />
            Send Email
          </a>
          <button onClick={() => window.print()} className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-all">
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-400 text-sm mb-12 max-w-2xl mx-auto border-t border-slate-900 pt-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-blue-500">
              <Mail className="w-5 h-5" />
            </div>
            <span>{HERO_DATA.contact.email}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-green-500">
              <Phone className="w-5 h-5" />
            </div>
            <span>{HERO_DATA.contact.phone}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-purple-500">
              <Linkedin className="w-5 h-5" />
            </div>
            <a href="#" className="hover:text-white transition-colors">LinkedIn Profile</a>
          </div>
        </div>

        <div className="text-slate-600 text-xs">
          <p>&copy; {new Date().getFullYear()} Priyansh Shekhar. All rights reserved.</p>
          <p className="mt-2">Designed with React, Tailwind, and D3.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;