'use client';

import { useEffect, useRef } from 'react';
import { Carousel } from "@material-tailwind/react";

interface PopUpCardProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PopUpCard({ isOpen, onClose }: PopUpCardProps) {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-100 z-50">
            <div ref={popupRef} className="bg-transparent p-4 rounded-xl">
                <Carousel>
                    <img src="promo1.png" alt="Promo 1" style={{ maxHeight: '40rem' }} className="" />
                    <img src="promo2.png" alt="Promo 2" style={{ maxHeight: '40rem' }} className="" />
                </Carousel>
            </div>
        </div>
    );
}
