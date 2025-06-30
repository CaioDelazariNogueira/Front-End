
import React, { useState } from 'react';
import { ArrowLeft, Star, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ResultScreenProps {
  product: any;
  onBack: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ product, onBack }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!product) return null;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-500 to-green-600';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-red-600';
  };

  const getScoreText = (score: number) => {
    if (score >= 80) return 'Excelente';
    if (score >= 60) return 'Bom';
    if (score >= 40) return 'Regular';
    return 'Ruim';
  };

  const mockReviews = [
    { name: 'Maria S.', rating: 4, comment: 'Produto ok, mas tem muito açúcar' },
    { name: 'João P.', rating: 3, comment: 'Sabor bom, mas prefiro opções mais saudáveis' },
    { name: 'Ana L.', rating: 5, comment: 'Gosto muito! Consumo com moderação' }
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12 bg-white border-b border-gray-100">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="hover:bg-gray-100 rounded-full p-2"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-lg font-semibold text-gray-800">Resultado</h1>
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-gray-100 rounded-full p-2"
        >
          <Heart className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-start space-x-4 mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 rounded-2xl object-cover shadow-md"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
              <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          </div>

          {/* Score Section */}
          <Card className="p-6 mb-6 border-0 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-gray-800 mb-2">{product.score}</div>
              <div className="text-lg font-semibold text-gray-700">{getScoreText(product.score)}</div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div
                className={`absolute left-0 top-0 h-full bg-gradient-to-r ${getScoreColor(product.score)} transition-all duration-1000 ease-out`}
                style={{ width: `${product.score}%` }}
              />
              {/* Score indicators */}
              <div className="absolute inset-0 flex justify-between items-center px-1">
                {[0, 25, 50, 75, 100].map((mark) => (
                  <div key={mark} className="w-0.5 h-2 bg-white/50 rounded" />
                ))}
              </div>
            </div>

            <div className="flex justify-between text-xs text-gray-500">
              <span>0</span>
              <span>100</span>
            </div>
          </Card>

          {/* Reasons */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Por que essa pontuação?</h3>
            <div className="space-y-3">
              {product.reasons?.map((reason: string, index: number) => (
                <Card key={index} className="p-4 border-l-4 border-l-yellow-400 bg-yellow-50 border-0">
                  <p className="text-sm text-gray-700">{reason}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Details Toggle */}
          <Button
            variant="outline"
            onClick={() => setShowDetails(!showDetails)}
            className="w-full mb-6 border-gray-200 hover:bg-gray-50"
          >
            <span>Saiba mais</span>
            {showDetails ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
          </Button>

          {/* Detailed Info */}
          {showDetails && (
            <Card className="p-6 mb-6 border-0 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in">
              <h4 className="font-semibold text-gray-800 mb-4">Informações Nutricionais</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Calorias por porção</span>
                  <span className="font-medium">150 kcal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Açúcares</span>
                  <span className="font-medium text-orange-600">Alto (12g)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gorduras trans</span>
                  <span className="font-medium text-green-600">0g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fibras</span>
                  <span className="font-medium">2g</span>
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mb-4 mt-6">Dicas de Substituição</h4>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  Experimente cookies integrais com menos açúcar ou frutas secas como alternativa mais saudável.
                </p>
              </div>
            </Card>
          )}

          {/* Reviews */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Avaliações de Usuários</h3>
            <div className="space-y-4">
              {mockReviews.map((review, index) => (
                <Card key={index} className="p-4 border-0 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-800">{review.name}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
