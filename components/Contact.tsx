import React from 'react';
import { Mail, Phone, Linkedin, Download, Github } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-paper pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-20 mb-20 border-b border-line pb-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-serif text-ink mb-8 leading-[0.9]">
              Let's <br /> <span className="italic text-graphite">Connect</span>
            </h2>
            <p className="text-lg text-graphite max-w-md">
               I'm currently looking for Product Management roles where I can leverage my experience in AI, 0→1 execution, and growth loops.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <a 
              href={`mailto:${HERO_DATA.contact.email}`} 
              className="group flex items-center justify-between p-8 border border-line bg-white hover:border-ink transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xl font-medium text-ink">{HERO_DATA.contact.email}</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-graphite group-hover:text-ink">Email Me</span>
            </a>

            <div className="grid md:grid-cols-2 gap-6">
               <a 
                href="#" 
                className="group flex items-center gap-4 p-6 border border-line bg-white hover:border-ink transition-colors"
              >
                <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center text-ink group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="font-medium text-ink">LinkedIn</span>
              </a>

              <a 
                href="#" 
                className="group flex items-center gap-4 p-6 border border-line bg-white hover:border-ink transition-colors"
              >
                <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center text-ink group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium text-ink">{HERO_DATA.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono text-graphite uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Priyansh Shekhar.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <span>Bengaluru, India</span>
             <span>Product Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;