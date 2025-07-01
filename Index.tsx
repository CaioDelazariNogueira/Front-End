
import React, { useState } from 'react';
import { HomeScreen } from '@/components/HomeScreen';
import { ScanScreen } from '@/components/ScanScreen';
import { ResultScreen } from '@/components/ResultScreen';
import { HistoryScreen } from '@/components/HistoryScreen';
import { ProfileScreen } from '@/components/ProfileScreen';
import { HealthScreen } from '@/components/HealthScreen';
import { SustainabilityScreen } from '@/components/SustainabilityScreen';
import { BottomNavigation } from '@/components/BottomNavigation';

type Screen = 'home' | 'scan' | 'result' | 'history' | 'profile' | 'health' | 'sustainability';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [scannedProduct, setScannedProduct] = useState(null);

  const handleScan = () => {
    setCurrentScreen('scan');
  };

  const handleScanComplete = (productData: any) => {
    setScannedProduct(productData);
    setCurrentScreen('result');
  };

  const handleNavigateToHealth = () => {
    setCurrentScreen('health');
  };

  const handleNavigateToSustainability = () => {
    setCurrentScreen('sustainability');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen 
            onScan={handleScan} 
            onNavigateToHealth={handleNavigateToHealth}
            onNavigateToSustainability={handleNavigateToSustainability}
          />
        );
      case 'scan':
        return <ScanScreen onScanComplete={handleScanComplete} onBack={() => setCurrentScreen('home')} />;
      case 'result':
        return <ResultScreen product={scannedProduct} onBack={() => setCurrentScreen('home')} />;
      case 'history':
        return <HistoryScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'health':
        return <HealthScreen onBack={() => setCurrentScreen('home')} />;
      case 'sustainability':
        return <SustainabilityScreen onBack={() => setCurrentScreen('home')} />;
      default:
        return <HomeScreen onScan={handleScan} onNavigateToHealth={handleNavigateToHealth} onNavigateToSustainability={handleNavigateToSustainability} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative">
      <div className="flex-1 overflow-hidden">
        {renderScreen()}
      </div>
      <BottomNavigation 
        currentScreen={currentScreen} 
        onNavigate={setCurrentScreen} 
      />
    </div>
  );
};

export default Index;
