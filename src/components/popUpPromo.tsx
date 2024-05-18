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
            <div ref={popupRef} className="bg-transparent p-4 rounded-xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                >
                    Fechar
                </button>
                <Carousel>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem' }}>
                        <img src="promo1.png" alt="Promo 1" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem' }}>
                        <img src="promo2.png" alt="Promo 2" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
