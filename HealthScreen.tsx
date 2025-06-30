
import React from 'react';
import { ArrowLeft, Heart, Apple, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface HealthScreenProps {
  onBack: () => void;
}

export const HealthScreen: React.FC<HealthScreenProps> = ({ onBack }) => {
  const healthTips = [
    {
      icon: <Apple className="w-8 h-8 text-red-500" />,
      title: "Ingredientes Naturais",
      description: "Prefira produtos com ingredientes que você reconhece e consegue pronunciar."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Menos Conservantes",
      description: "Evite produtos com muitos conservantes artificiais e corantes."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Valor Nutricional",
      description: "Verifique sempre a tabela nutricional e prefira alimentos ricos em nutrientes."
    }
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 px-6 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-white hover:bg-white/20 rounded-full p-2"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-white text-2xl font-bold">Dicas de Saúde</h1>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6">
        <div className="space-y-4">
          {healthTips.map((tip, index) => (
            <Card key={index} className="p-6 border-0 bg-gradient-to-r from-red-50 to-red-100 animate-fade-in">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-sm">
                  {tip.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-red-800 mb-2 text-lg">
                    {tip.title}
                  </h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6 p-6 border-0 bg-gradient-to-r from-red-100 to-red-200">
          <div className="text-center">
            <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="font-bold text-red-800 text-lg mb-2">Sua Saúde em Primeiro Lugar</h3>
            <p className="text-red-700 text-sm">
              Use o EcoScan para fazer escolhas mais conscientes e saudáveis no seu dia a dia.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
