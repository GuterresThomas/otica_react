'use client'

import { useEffect, useRef } from 'react';
import { Carousel } from "@material-tailwind/react";

export default function PopUpCard({ isOpen, onClose }) {
    const popupRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
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
                     <img src="promo1.png" alt="Promo 1"  style={{ maxHeight: '40rem' }} className="object-cover" />
                     <img src="promo2.png" alt="Promo 1"  style={{ maxHeight: '40rem' }} className="object-cover" />
                </Carousel>
            </div>
        </div>
    );
}
