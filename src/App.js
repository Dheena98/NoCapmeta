import React from 'react';
import AvatarCustomization from './Components/AvatarCustomization';
import VirtualEnvironment from './Components/VirtualEnvironment';
import MultiplayerRoom from './Components/MultiplayerRoom';
import Chat from './Components/Chat';

const App = () => {
  return (
    <div>
      <AvatarCustomization />
      <VirtualEnvironment />
      <MultiplayerRoom />
      <Chat />
    </div>
  );
};

export default App;
