import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <h1>
      I'm Root
      <Outlet />
    </h1>
  );
}
