import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TabBarIconProps = {
  routeName: string;
  color: string;
  size: number;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, color, size }) => {
  let iconName = '';

  switch (routeName) {
    case 'HiveList':
      iconName = 'list';
      break;
    case 'Data':
      iconName = 'bar-chart-outline';
      break;
    case 'Map':
      iconName = 'map-outline';
      break;
    case 'History':
      iconName = 'receipt-outline';
      break;
    case 'Profile':
      iconName = 'person-outline';
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default TabBarIcon;
