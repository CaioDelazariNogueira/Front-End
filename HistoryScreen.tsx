
import React, { useState } from 'react';
import { Search, Calendar, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const HistoryScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockHistory = [
    {
      id: '1',
      name: 'Cookies Recheados Premium',
      brand: 'Marca Exemplo',
      score: 65,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      scannedAt: '2024-06-25T10:30:00Z',
      category: 'Biscoitos'
    },
    {
      id: '2',
      name: 'Iogurte Natural Integral',
      brand: 'Laticínios Premium',
      score: 85,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400',
      scannedAt: '2024-06-24T15:45:00Z',
      category: 'Laticínios'
    },
    {
      id: '3',
      name: 'Cereal Matinal Chocolate',
      brand: 'Cereais & Cia',
      score: 45,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400',
      scannedAt: '2024-06-23T08:20:00Z',
      category: 'Cereais'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const filteredHistory = mockHistory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-6 pt-12 bg-gradient-to-br from-green-500 to-green-600">
        <h1 className="text-white text-2xl font-bold mb-2">Histórico</h1>
        <p className="text-green-100 text-sm mb-6">Seus produtos escaneados</p>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white border-0 rounded-xl shadow-sm"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 bg-white border-b border-gray-100">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{mockHistory.length}</div>
            <div className="text-xs text-gray-600">Produtos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {Math.round(mockHistory.reduce((sum, item) => sum + item.score, 0) / mockHistory.length)}
            </div>
            <div className="text-xs text-gray-600">Média</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">7</div>
            <div className="text-xs text-gray-600">Esta semana</div>
          </div>
        </div>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto p-6">
        {filteredHistory.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-500 text-center">
              {searchTerm ? 'Nenhum produto encontrado' : 'Seu histórico aparecerá aqui'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredHistory.map((item) => (
              <Card key={item.id} className="p-4 border-0 bg-gradient-to-r from-gray-50 to-gray-100 hover:shadow-md transition-all duration-200 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{item.brand}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(item.scannedAt)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getScoreColor(item.score)}`}>
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
