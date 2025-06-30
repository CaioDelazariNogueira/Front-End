
import React from 'react';
import { ArrowLeft, Leaf, Recycle, Globe, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface SustainabilityScreenProps {
  onBack: () => void;
}

export const SustainabilityScreen: React.FC<SustainabilityScreenProps> = ({ onBack }) => {
  const sustainabilityTips = [
    {
      icon: <Recycle className="w-8 h-8 text-green-500" />,
      title: "Embalagens Recicláveis",
      description: "Escolha produtos com embalagens que podem ser recicladas ou reutilizadas."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Produtos Locais",
      description: "Prefira alimentos produzidos localmente para reduzir a pegada de carbono."
    },
    {
      icon: <TreePine className="w-8 h-8 text-green-600" />,
      title: "Ingredientes Orgânicos",
      description: "Opte por produtos orgânicos que não utilizam pesticidas prejudiciais ao meio ambiente."
    }
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 px-6 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-white hover:bg-white/20 rounded-full p-2"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-white text-2xl font-bold">Sustentabilidade</h1>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6">
        <div className="space-y-4">
          {sustainabilityTips.map((tip, index) => (
            <Card key={index} className="p-6 border-0 bg-gradient-to-r from-green-50 to-green-100 animate-fade-in">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-sm">
                  {tip.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-green-800 mb-2 text-lg">
                    {tip.title}
                  </h3>
                  <p className="text-green-700 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6 p-6 border-0 bg-gradient-to-r from-green-100 to-blue-100">
          <div className="text-center">
            <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-green-800 text-lg mb-2">Cuide do Nosso Planeta</h3>
            <p className="text-green-700 text-sm">
              Pequenas escolhas fazem uma grande diferença para o meio ambiente.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
