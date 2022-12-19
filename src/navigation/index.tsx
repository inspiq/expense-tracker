import AuthProvider from 'src/providers/auth-provider';
import TabBarProvider from 'src/providers/tabbar-provider';
import RootNavigation from './root';

const Providers = () => {
  return (
    <AuthProvider>
      <TabBarProvider>
        <RootNavigation />
      </TabBarProvider>
    </AuthProvider>
  );
};

export default Providers;
