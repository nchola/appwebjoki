import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedMenuProps<T> {
  open: boolean;
  onClose?: () => void;
  anchorRef: React.RefObject<HTMLElement>;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  menuClassName?: string;
  triangleClassName?: string;
  menuWidth?: string;
  menuPadding?: string;
  zIndex?: number;
}

function AnimatedMenu<T>({
  open,
  onClose,
  anchorRef,
  items,
  renderItem,
  menuClassName = '',
  triangleClassName = '',
  menuWidth = 'max-w-[400px] w-[80vw]',
  menuPadding = 'p-8',
  zIndex = 50,
}: AnimatedMenuProps<T>) {
  const menuMainRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState<{top: number, right: number}>({top: 0, right: 0});
  const [arrowLeft, setArrowLeft] = useState<number>(0);

  useEffect(() => {
    if (open && anchorRef.current && menuMainRef.current) {
      const iconRect = anchorRef.current.getBoundingClientRect();
      const menuRect = menuMainRef.current.getBoundingClientRect();
      const iconCenter = iconRect.left + iconRect.width / 2;
      const arrowWidth = 16; // w-4
      const left = iconCenter - menuRect.left - arrowWidth / 2;
      setMenuPos({
        top: iconRect.bottom + 12,
        right: window.innerWidth - iconRect.right
      });
      setArrowLeft(left);
    }
  }, [open, anchorRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className={`fixed transition-all duration-500 ease-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{ top: `${menuPos.top}px`, right: `${menuPos.right}px`, zIndex }}
        >
          {/* Segitiga presisi */}
          <div className={`absolute -top-2 z-50 ${triangleClassName}`} style={{ left: arrowLeft }}>
            <div className="w-4 h-4 bg-black/80 rotate-45 shadow-xl" />
          </div>
          {/* Menu utama */}
          <motion.div
            ref={menuMainRef}
            className={`relative ${menuWidth} rounded-2xl bg-black/80 backdrop-blur-lg shadow-xl ${menuPadding} ${menuClassName}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <motion.nav
              className="space-y-6"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.18 } }
              }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: 'easeOut' } }
                  }}
                >
                  {renderItem(item, index)}
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AnimatedMenu; 