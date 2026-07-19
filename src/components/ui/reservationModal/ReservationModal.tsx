"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import { useReservationModal } from "@/context/ReservationModalContext";

declare global {
  interface Window {
    iFrameResize?: () => void;
  }
}

type Props = {
  translations: any;
}

export const ReservationModal = ({ translations }: Props) => {
  const { open, closeModal } = useReservationModal();

  const pathname = usePathname();

  const lang = pathname.split("/")[1] || "es";

  const [showCoverManager, setShowCoverManager] = useState(false);

  const coverManagerUrl =
    lang === "en"
      ? "https://www.covermanager.com/reservation/module_restaurant/Umo-fire-steackhouse-cala-dor/english"
      : "https://www.covermanager.com/reservation/module_restaurant/Umo-fire-steackhouse-cala-dor/spanish";

  /**
   * Cuando cierro el modal vuelvo
   * a la pantalla principal.
   */
  useEffect(() => {
    if (!open) {
      setShowCoverManager(false);
    }
  }, [open]);

  /**
   * Bloqueo el scroll
   */
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /**
   * Cerrar con Escape
   */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeModal]);

  if (!open) return null;

  return (
    <>
      <Script
        src="https://www.covermanager.com/js/iframeResizer/iframeResizer.min.js"
        strategy="afterInteractive"
      />

      <div
        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={closeModal}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-white rounded-2xl shadow-2xl w-full transition-all duration-300 ${
            showCoverManager ? "max-w-5xl" : "max-w-lg"
          }`}
        >
          {/* Botón cerrar */}

          <button
            onClick={closeModal}
            className="absolute right-4 top-4 text-3xl text-gray-500 hover:text-black z-20 cursor-pointer"
          >
            ×
          </button>

          {/* =======================================================
              PANTALLA 1
          ======================================================= */}

          {!showCoverManager && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center mb-3">
                {translations.reservation_modal.title}
              </h2>

              <p className="text-center text-gray-500 mb-8">
                {translations.reservation_modal.text}
              </p>

              <div className="space-y-5">
                {/* THE FORK */}

                <a
                  href="https://widget.thefork.com/93bb04b9-f5b4-4022-8ba8-52afd0deaee9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center border rounded-xl p-6 hover:shadow-lg transition hover:border-gold cursor-pointer"
                >
                  <Image
                    src="/img/thefork.svg"
                    alt="TheFork"
                    width={220}
                    height={60}
                  />
                </a>

                {/* COVER MANAGER */}

                <button
                  onClick={() => setShowCoverManager(true)}
                  className="w-full flex justify-center items-center border rounded-xl p-6 hover:shadow-lg transition hover:border-gold cursor-pointer"
                >
                  <Image
                    src="/img/covermanager.png"
                    alt="Cover Manager"
                    width={220}
                    height={60}
                  />
                </button>
              </div>
            </div>
          )}

          {/* =======================================================
              PANTALLA 2
          ======================================================= */}

          {showCoverManager && (
            <div className="p-6">
              <button
                onClick={() => setShowCoverManager(false)}
                className="mb-5 font-semibold cursor-pointer"
              >
                ← {translations.reservation_modal.back}
              </button>

              <iframe
                id="Umo-fire-steackhouse-cala-dor"
                title="Reservas"
                src={coverManagerUrl}
                allow="payment"
                width="100%"
                height="650"
                frameBorder={0}
                onLoad={() => {
                  if (window.iFrameResize) {
                    window.iFrameResize();
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};