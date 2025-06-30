
import React from 'react';
import { User, Settings, Bell, LogOut, Award, BarChart3, Leaf } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const ProfileScreen: React.FC = () => {
  const userStats = {
    scannedProducts: 127,
    averageScore: 73,
    streak: 12,
    level: 'Eco Warrior'
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-6 pt-12 bg-gradient-to-br from-green-500 to-green-600">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">João Silva</h1>
            <p className="text-green-100 text-sm">joao.silva@email.com</p>
            <div className="flex items-center mt-2">
              <Award className="w-4 h-4 text-yellow-300 mr-1" />
              <span className="text-green-100 text-sm font-medium">{userStats.level}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Stats Cards */}
        <div className="p-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Suas Estatísticas</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card className="p-4 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {userStats.scannedProducts}
                </div>
                <div className="text-sm text-blue-800">Produtos Escaneados</div>
              </div>
            </Card>
            
            <Card className="p-4 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {userStats.averageScore}
                </div>
                <div className="text-sm text-green-800">Score Médio</div>
              </div>
            </Card>
            
            <Card className="p-4 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {userStats.streak}
                </div>
                <div className="text-sm text-purple-800">Dias Consecutivos</div>
              </div>
            </Card>
            
            <Card className="p-4 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2">
                  <Leaf className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-sm text-orange-800">Eco Impact</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Achievement */}
        <div className="px-6 pb-6">
          <Card className="p-4 border-0 bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-l-yellow-400">
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-yellow-800">Parabéns!</h3>
                <p className="text-sm text-yellow-700">Você alcançou o nível Eco Warrior</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Menu Options */}
        <div className="px-6 pb-8">
          <div className="space-y-3">
            <Button
              variant="ghost"
              className="w-full justify-start h-14 hover:bg-gray-50"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Editar Perfil</div>
                <div className="text-sm text-gray-500">Altere suas informações</div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start h-14 hover:bg-gray-50"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <BarChart3 className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Estatísticas Detalhadas</div>
                <div className="text-sm text-gray-500">Veja seu progresso completo</div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start h-14 hover:bg-gray-50"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <Bell className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Notificações</div>
                <div className="text-sm text-gray-500">Configure seus alertas</div>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start h-14 hover:bg-gray-50"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <Settings className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Configurações</div>
                <div className="text-sm text-gray-500">Personalize o aplicativo</div>
              </div>
            </Button>

            <div className="pt-4">
              <Button
                variant="ghost"
                className="w-full justify-start h-14 hover:bg-red-50 text-red-600"
              >
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <LogOut className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Sair da Conta</div>
                  <div className="text-sm text-red-500">Fazer logout do aplicativo</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
