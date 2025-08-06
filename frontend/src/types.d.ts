declare module '*.jsx' {
  import React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module './users/routes' {
  import React from 'react';
  const UserRoutes: React.FC;
  export default UserRoutes;
}

declare module '*.css' {
  const content: string;
  export default content;
} 