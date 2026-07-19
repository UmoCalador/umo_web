"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type ContextType = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ReservationModalContext = createContext<ContextType | null>(null);

export function ReservationModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <ReservationModalContext.Provider
      value={{
        open,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
      }}
    >
      {children}
    </ReservationModalContext.Provider>
  );
}

export function useReservationModal() {
  const context = useContext(ReservationModalContext);

  if (!context)
    throw new Error(
      "useReservationModal debe utilizarse dentro del Provider"
    );

  return context;
}