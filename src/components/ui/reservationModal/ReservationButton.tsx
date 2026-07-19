"use client";

import { ReactNode } from "react";
import { useReservationModal } from "@/context/ReservationModalContext";

type Props = {
  children: ReactNode;
  className?: string;
};

export function ReservationButton({
  children,
  className,
}: Props) {
  const { openModal } = useReservationModal();

  return (
    <button
      onClick={openModal}
      className={className}
    >
      {children}
    </button>
  );
}