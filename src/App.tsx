/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { MessageCircle, ShieldCheck, Flame, Refrigerator, Gift, Star } from 'lucide-react';
import { motion, animate } from 'motion/react';

function Counter({ value, duration = 2, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: duration,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [value, duration]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#3b0764] text-white font-sans selection:bg-white/20 overflow-x-hidden relative">
      {/* Animated Background Elements - Vibrant Purple Version */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Vibrant Purple Glows */}
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full bg-purple-500/30 blur-[120px]" 
        />
        
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px]" 
        />

        {/* Floating Accent Blobs */}
        <motion.div 
          animate={{
            y: [0, -80, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[20%] right-[5%] w-48 h-48 bg-purple-400/10 blur-[80px] rounded-full"
        />
      </div>

      <main className="relative z-10 max-w-md mx-auto px-6 py-10 flex flex-col items-center space-y-8">
        
        {/* Header / Logo */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center pt-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase tracking-[0.2em] font-black mb-4 text-purple-200"
          >
            Tempero Premium
          </motion.div>
          <h1 className="text-6xl font-black tracking-tighter uppercase leading-none text-white italic drop-shadow-2xl">
            ALHO E SÓ
          </h1>
        </motion.header>

        {/* Social Proof - Bento Style */}
        <div className="grid grid-cols-1 gap-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 flex flex-col items-center text-center group shadow-2xl shadow-black/20 transition-all duration-300"
          >
            <div className="text-5xl font-black tracking-tighter text-purple-300 mb-2">
              +<Counter value={40} suffix=" MIL" />
            </div>
            <p className="text-sm font-bold text-white/70 uppercase tracking-widest">
              potes vendidos em 6 anos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 flex flex-col items-center text-center group shadow-2xl shadow-black/20 transition-all duration-300"
          >
            <div className="text-5xl font-black tracking-tighter text-emerald-400 mb-2">
              +<Counter value={1800} />
            </div>
            <p className="text-sm font-bold text-white/70 uppercase tracking-widest">
              Clientes ativos que compram nosso alho.
            </p>
          </motion.div>
        </div>

        {/* Benefits List */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full space-y-4"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 space-y-6 shadow-2xl shadow-black/20">
            {[
              { icon: <ShieldCheck size={22} />, text: "Alho triturado 100% puro", color: "text-purple-300", bg: "bg-purple-500/20" },
              { icon: <Flame size={22} />, text: "Não espirra na panela", color: "text-emerald-400", bg: "bg-emerald-500/20" },
              { icon: <Refrigerator size={22} />, text: "Dura 30 dias na geladeira", color: "text-blue-400", bg: "bg-blue-500/20" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="flex items-center gap-5"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} shrink-0 shadow-inner`}>
                  {item.icon}
                </div>
                <p className="font-black text-lg tracking-tight text-white">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">
              Apenas temperos naturais
            </p>
          </div>
        </motion.section>

        {/* Bonus Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-gradient-to-br from-purple-600/40 to-emerald-600/40 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl"
        >
          <motion.div 
            animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity"
          >
            <Star size={64} className="text-emerald-400" />
          </motion.div>
          <div className="flex gap-5 items-start relative z-10">
            <div className="mt-1 text-emerald-400 bg-white/10 p-2.5 rounded-xl shadow-inner border border-white/10">
              <Gift size={24} />
            </div>
            <p className="text-lg font-black leading-snug text-white">
              Ganhe um <span className="text-emerald-400 underline decoration-emerald-400/30 underline-offset-4">pote bonito de brinde</span> para reutilizar depois!
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="w-full pt-2"
        >
          <motion.a
            href="https://wa.me/5511998376233?text=Vim%20do%20instagram%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#22c35e] text-white py-6 px-8 rounded-[2rem] text-xl font-black shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] transition-all w-full relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <MessageCircle className="w-8 h-8 fill-current relative z-10" />
            <span className="relative z-10">Fale no WhatsApp</span>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <footer className="pt-4 pb-10 flex flex-col items-center gap-3">
          <div className="h-1.5 w-10 bg-white/10 rounded-full" />
          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">
            &copy; {new Date().getFullYear()} Alho e Só • Premium
          </p>
        </footer>
      </main>
    </div>
  );
}
