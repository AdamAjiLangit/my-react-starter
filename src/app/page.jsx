'use client';

import { NextUIProvider, Button } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <Button>Click me</Button>
    </NextUIProvider>
  );
}
