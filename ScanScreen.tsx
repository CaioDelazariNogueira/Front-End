
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Camera, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ScanScreenProps {
  onScanComplete: (product: any) => void;
  onBack: () => void;
}

export const ScanScreen: React.FC<ScanScreenProps> = ({ onScanComplete, onBack }) => {
  const [isScanning, setIsScanning] = useState(false);

  // Simulate scanning process
  const handleScan = () => {
    setIsScanning(true);
    
    // Simulate scanning delay
    setTimeout(() => {
      // Mock product data
      const mockProduct = {
        id: '12345678901',
        name: 'Cookies Recheados Premium',
        brand: 'Marca Exemplo',
        score: 65,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
        reasons: [
          'Alto teor de açúcar',
          'Presença de conservantes',
          'Embalagem reciclável'
        ],
        category: 'Biscoitos e Bolachas',
        scannedAt: new Date().toISOString()
      };
      
      setIsScanning(false);
      onScanComplete(mockProduct);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full bg-black">
      {/* Header */}
      <div className="flex-shrink-0 p-6 pt-12">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-white hover:bg-white/20 rounded-full p-2"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-white text-lg font-semibold">Escanear Código</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Camera View - Takes remaining space */}
      <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center relative px-6">
        {!isScanning && (
          <>
            {/* Scan Frame */}
            <div className="relative mb-8">
              <div className="w-64 h-64 border-2 border-white/50 rounded-3xl relative">
                {/* Corner indicators */}
                <div className="absolute -top-1 -left-1 w-8 h-8 border-l-4 border-t-4 border-green-400 rounded-tl-lg" />
                <div className="absolute -top-1 -right-1 w-8 h-8 border-r-4 border-t-4 border-green-400 rounded-tr-lg" />
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-4 border-b-4 border-green-400 rounded-bl-lg" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-4 border-b-4 border-green-400 rounded-br-lg" />
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Scanning line animation */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse" 
                     style={{ top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>

            {/* Instructions */}
            <Card className="bg-white/10 backdrop-blur border-0 p-4 mb-8 mx-6">
              <p className="text-white text-center text-sm leading-relaxed">
                Posicione o código de barras dentro do quadro para escanear
              </p>
            </Card>
          </>
        )}

        {/* Scanning State */}
        {isScanning && (
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 relative mb-8">
              <div className="absolute inset-0 border-4 border-green-400 rounded-full animate-ping" />
              <div className="absolute inset-4 border-4 border-green-300 rounded-full animate-ping animation-delay-200" />
              <div className="absolute inset-8 bg-green-500 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
            <p className="text-white text-lg font-semibold mb-2">Escaneando...</p>
            <p className="text-white/70 text-sm">Analisando produto</p>
          </div>
        )}
      </div>

      {/* Scan Button - Fixed at bottom */}
      {!isScanning && (
        <div className="flex-shrink-0 p-6">
          <Button
            onClick={handleScan}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            <Camera className="w-6 h-6 mr-3" />
            Capturar Código
          </Button>
        </div>
      )}
    </div>
  );
};
