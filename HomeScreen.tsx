import React, { useState, useEffect } from 'react';
import { Scan, Leaf, Heart, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface HomeScreenProps {
  onScan: () => void;
  onNavigateToHealth?: () => void;
  onNavigateToSustainability?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ 
  onScan, 
  onNavigateToHealth,
  onNavigateToSustainability 
}) => {
  const [currentTip, setCurrentTip] = useState(0);

  const healthTips = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Dica de Saúde",
      content: "Prefira produtos com menos de 5 ingredientes na lista"
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      title: "Sustentabilidade",
      content: "Escolha produtos com embalagens recicláveis"
    },
    {
      icon: <Recycle className="w-6 h-6 text-blue-500" />,
      title: "Meio Ambiente",
      content: "Produtos locais têm menor impacto no meio ambiente"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % healthTips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleHealthClick = () => {
    if (onNavigateToHealth) {
      onNavigateToHealth();
    } else {
      console.log('Navegando para seção de Saúde');
      // Placeholder - pode mostrar toast ou modal com dicas de saúde
    }
  };

  const handleSustainabilityClick = () => {
    if (onNavigateToSustainability) {
      onNavigateToSustainability();
    } else {
      console.log('Navegando para seção de Sustentabilidade');
      // Placeholder - pode mostrar toast ou modal com dicas sustentáveis
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 px-6 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white text-2xl font-bold">EcoScan</h1>
            <p className="text-green-100 text-sm">Escaneie e descubra</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Welcome Message */}
        <Card className="bg-white/10 backdrop-blur border-0 p-4">
          <p className="text-white text-sm leading-relaxed">
            Olá! Escaneie produtos e descubra seu impacto na sua saúde e no meio ambiente.
          </p>
        </Card>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 px-6 py-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Dicas para a Vida Saudável</h2>
        
        <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-0 p-6 mb-6 animate-fade-in">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
              {healthTips[currentTip].icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {healthTips[currentTip].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {healthTips[currentTip].content}
              </p>
            </div>
          </div>
          
          {/* Tip indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {healthTips.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentTip ? 'bg-green-500 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          <Card 
            className="p-4 border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
            onClick={handleHealthClick}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium text-green-800">Saúde</p>
              <p className="text-xs text-green-600 mt-1">Controle sua alimentação</p>
            </div>
          </Card>

          <Card 
            className="p-4 border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
            onClick={handleSustainabilityClick}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium text-blue-800">Sustentável</p>
              <p className="text-xs text-blue-600 mt-1">Cuide do planeta</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Scan Button */}
      <div className="px-6 pb-8">
        <Button 
          onClick={onScan}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <Scan className="w-6 h-6 mr-3" />
          Escanear Produto
        </Button>
      </div>
    </div>
  );
};
