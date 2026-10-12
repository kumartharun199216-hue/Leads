import React, { useState, useRef, useCallback } from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { Sparkles, Calendar, ArrowLeftRight } from 'lucide-react';

export const SmileSlider = () => {
  const { setActiveNav, setPreSelectedProcedure, procedures } = useAppointments();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleBookWhitening = () => {
    const whiteningProc = procedures.find(p => p.id === 'PROC004');
    if (whiteningProc) setPreSelectedProcedure(whiteningProc);
    setActiveNav('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 text-left space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Real Patient Smile Makeovers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              See the Before & After Transformation
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Drag the interactive slider to see how single-sitting laser whitening and aesthetic veneers 
              safely remove deep tea, coffee, and fluorosis stains, brightening your smile up to 8 shades lighter.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="text-sm font-bold text-slate-900">Case Study: 45-Minute In-Clinic Laser Whitening</div>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3 bg-white rounded-xl border border-slate-100">
                  <span className="text-slate-400 block mb-0.5">Starting Shade:</span>
                  <strong className="text-amber-800 text-sm">A3.5 (Deep Stained)</strong>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-100">
                  <span className="text-slate-400 block mb-0.5">Resulting Shade:</span>
                  <strong className="text-teal-700 text-sm">B1 (Brilliant Natural White)</strong>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                "I got this done before my brother's wedding in Vijayawada. Completely painless with instant results!" — M. Sravani (Age 26)
              </p>
            </div>

            <div>
              <button
                onClick={handleBookWhitening}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Laser Whitening Session (₹3,500)
              </button>
            </div>
          </div>

          {/* Right Interactive Drag Slider */}
          <div className="lg:col-span-7">
            <div className="text-center mb-3 text-xs font-semibold text-slate-500 flex items-center justify-center gap-2">
              <ArrowLeftRight className="w-3.5 h-3.5 text-teal-600" />
              <span>Drag the white bar left or right to compare</span>
            </div>

            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border-4 border-white"
            >
              {/* After Image (Background: Clean White Smile) */}
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&auto=format&fit=crop&q=80"
                alt="After Whitening"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-teal-800/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                AFTER (Laser Whitened)
              </div>

              {/* Before Image (Foreground: Clipped with stained look) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&auto=format&fit=crop&q=80"
                  alt="Before Whitening"
                  className="absolute inset-0 w-full h-full object-cover filter contrast-125 sepia-[0.35]"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  BEFORE (Yellow Stained)
                </div>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-teal-600 text-teal-700">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileSlider;
