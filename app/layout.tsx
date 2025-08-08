'use client'
import { Saira } from 'next/font/google';
import './globals.css'
import { useEffect } from 'react';


const saira = Saira({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
  const circle = document.getElementById("circle");
  if (!circle) return;
  
  // Use requestAnimationFrame for smoother performance
  let lastX = 0;
  let lastY = 0;
  let rafId: number | null = null;
  const offsetx = -30;
  
  // Throttle the mousemove event using requestAnimationFrame
  function updateCirclePosition() {
    if (circle) {
      circle.style.transform = `translate(${lastX + offsetx}px, ${lastY + offsetx}px)`;
    }
    rafId = null;
  }
  
  function handleMouseMove(e: MouseEvent) {
    // Store the latest position
    lastX = e.clientX;
    lastY = e.clientY;
    
    // Only schedule a new frame if one isn't already pending
    if (rafId === null) {
      rafId = requestAnimationFrame(updateCirclePosition);
    }
  }
  
  // Debounce the event by using a lower frequency listener
  document.addEventListener('mousemove', handleMouseMove, { passive: true });
  
  // Cleanup
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
    }
  };
}, []);

  return (
    <html lang="en" className={saira.className}>
      <head>
        <style>{`
          html {
            font-family: ${saira.style.fontFamily};
          }
        `}</style>
      </head>
       
      <body>
        <div id="circle"></div>
        {children}
        </body>
    </html>
  )
}