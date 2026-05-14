"use client";
import Image from "next/image";
import { GalleryItem } from "@/types/galerryItem";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  items: GalleryItem[];
};

export const Gallery = ({ items }: Props) => {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const setSelectedItem = (item: GalleryItem) => {
    setSelected(item);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
      {items.map((item) => (
        <div
          className="relative aspect-[4/3] overflow-hidden cursor-pointer"
          key={item.id}
          onClick={() => setSelectedItem(item)}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      ))}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <div
              className="text-white absolute right-0 top-0 p-4 cursor-pointer text-2xl"
              onClick={() => {
                setSelected(null);
              }}
            >
              <FaTimes />
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white max-w-4xl w-full gap-4"
            >
              <div className="bg-white max-w-4xl mx-auto p-6 gap-4">
                <div className="relative overflow-hidden">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/**<div>
                  <div>
                    <h2 className="text-xl font-bold pt-6">{selected.title}</h2>
                  </div>
                </div>*/}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
